import * as t3d from "t3d";
import { OrbitControls } from "t3d/addons/controls/OrbitControls.js";
import { Texture2DLoader } from "t3d/addons/loaders/Texture2DLoader.js";
import { SkyBox } from "t3d/addons/objects/SkyBox.js";

const width = window.innerWidth || 2;
const height = window.innerHeight || 2;

const canvas = document.createElement("canvas");
canvas.width = width;
canvas.height = height;
document.body.appendChild(canvas);

const gl = canvas.getContext("webgl2", {
  antialias: true,
  alpha: false,
});
const renderer = new t3d.WebGLRenderer(gl);
renderer.setClearColor(0.1, 0.1, 0.1, 1);
const backRenderTarget = new t3d.RenderTargetBack(canvas);

const scene = new t3d.Scene();

const textureLoader = new Texture2DLoader();

const backgroundTexture = textureLoader.load(
  "./sun-moon-stars/2k_stars_milky_way.jpg"
);

const skyBox = new SkyBox();
skyBox.texture = backgroundTexture;
scene.add(skyBox);

// createBall("./sun-moon-stars/2k_moon.jpg", [20, 0, 0]);
createSun("./sun-moon-stars/2k_sun.jpg", [0, 0, 0], true);

createBall("./planets/2k_mercury.jpg", [10, 0, 0]);
createBall("./planets/2k_venus_atmosphere.jpg", [20, 0, 0]);
createBall("./earth/2k_earth_daymap.jpg", [30, 0, 0]);
createBall("./planets/2k_mars.jpg", [40, 0, 0]);
createBall("./planets/2k_saturn.jpg", [50, 0, 0]);
createBall("./planets/2k_jupiter.jpg", [60, 0, 0]);
createBall("./planets/2k_uranus.jpg", [70, 0, 0]);
createBall("./planets/2k_neptune.jpg", [80, 0, 0]);

function createBall(imageUrl, position) {
  const texture = textureLoader.load(imageUrl);
  texture.encoding = t3d.TEXEL_ENCODING_TYPE.SRGB;
  const geometry = new t3d.SphereGeometry(2, 64, 32);
  const material = new t3d.PBRMaterial();
  material.metalness = 0.2;
  material.roughness = 0.8;
  material.diffuseMap = texture;
  const mesh = new t3d.Mesh(geometry, material);
  mesh.position.fromArray(position);
  scene.add(mesh);
}

function createSun(imageUrl, position) {
  const texture = textureLoader.load(imageUrl);
  const geometry = new t3d.SphereGeometry(4, 64, 32);
  const material = new t3d.BasicMaterial();
  material.metalness = 0.2;
  material.roughness = 0.8;
  material.diffuseMap = texture;
  const mesh = new t3d.Mesh(geometry, material);
  mesh.position.fromArray(position);
  scene.add(mesh);
}

const ambientLight = new t3d.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight);

const pointLight = new t3d.PointLight(0xffffff, 1);
pointLight.distance = 200;
scene.add(pointLight);

const camera = new t3d.Camera();
camera.outputEncoding = t3d.TEXEL_ENCODING_TYPE.SRGB;
camera.position.set(0, 0, 100);
camera.lookAt(new t3d.Vector3(0, 0, 0), new t3d.Vector3(0, 1, 0));
camera.setPerspective((45 / 180) * Math.PI, width / height, 1, 1000);
scene.add(camera);

const controls = new OrbitControls(camera, canvas);

function loop(count) {
  requestAnimationFrame(loop);

  controls.update();

  scene.updateMatrix();
  scene.updateRenderStates(camera);
  scene.updateRenderQueue(camera);

  renderer.setRenderTarget(backRenderTarget);
  renderer.clear(true, true, false);
  renderer.renderScene(scene, camera);
}
requestAnimationFrame(loop);
