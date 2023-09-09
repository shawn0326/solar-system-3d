import {
  Object3D,
  Geometry,
  BasicMaterial,
  PBRMaterial,
  Mesh,
  TEXEL_ENCODING_TYPE,
  Attribute,
  Buffer,
  DRAW_MODE,
  Spherical,
} from "t3d";
import { Texture2DLoader } from "t3d/addons/loaders/Texture2DLoader.js";
import { Scaler, unitSphereGeometry } from "./utils.js";
import PlanetRing from "./PlanetRing.js";

export default class Planet extends Object3D {
  constructor(planetData) {
    const { name, color, texture, size, ring, revolution, rotation } =
      planetData;

    const mesh = new Mesh(unitSphereGeometry, new PBRMaterial());
    mesh.name = name + "-mesh";
    const _size = Scaler.scalePlanetRadius(size) * 2;
    mesh.scale.set(_size, _size, _size);
    mesh.material.metalness = 0.2;
    mesh.material.roughness = 0.8;
    mesh.material.diffuse.setHex(color);
    textureLoader.loadAsync(texture).then((_texture) => {
      mesh.material.diffuse.setHex(0xffffff);
      mesh.material.diffuseMap = _texture;
      mesh.material.diffuseMap.encoding = TEXEL_ENCODING_TYPE.SRGB;
      mesh.material.needsUpdate = true;
    });

    super();

    this.name = name;

    this.add(mesh);
    this._mesh = mesh;

    if (ring) {
      this.add(new PlanetRing(planetData));
    }

    // revolution
    this._revolutionSpeed = (2 * Math.PI) / revolution.period;
    this._revolutionSperical = new Spherical();
    this._revolutionSperical.phi = Math.PI / 2;
    this._revolutionSperical.theta = Math.random() * 2 * Math.PI; // random start
    this._revolutionSperical.radius = Scaler.scaleRevolutionRadius(
      revolution.radius
    );

    // rotation
    this.euler.z = (rotation.axis / 180) * Math.PI;
    this._rotationSpeed = (2 * Math.PI) / rotation.period;
  }

  update(deltaTime) {
    // revolution
    this._revolutionSperical.theta +=
      Scaler.scaleRevolutionSpeed(this._revolutionSpeed) * deltaTime;
    this._revolutionSperical.theta =
      this._revolutionSperical.theta % (2 * Math.PI);
    this.position.setFromSpherical(this._revolutionSperical);

    // rotation
    this._mesh.euler.y +=
      Scaler.scaleRotationSpeed(this._rotationSpeed) * deltaTime;
  }

  showRotationAxis() {
    let axisMesh = this.getObjectByName("axis");
    if (!axisMesh) {
      const axisGeometry = new Geometry();
      const halfAxisLength = (this._mesh.scale.x * 3) / 2;
      const positions = new Float32Array([
        0,
        halfAxisLength,
        0,
        0,
        -halfAxisLength,
        0,
      ]);
      axisGeometry.addAttribute(
        "a_Position",
        new Attribute(new Buffer(positions, 3))
      );
      axisGeometry.computeBoundingBox();
      axisGeometry.computeBoundingSphere();
      axisMesh = new Mesh(axisGeometry, new BasicMaterial());
      axisMesh.name = "axis";
      axisMesh.material.drawMode = DRAW_MODE.LINES;
      axisMesh.material.diffuse.setRGB(0.1, 0.1, 0.1);
      this.add(axisMesh);
    }
    axisMesh.visible = true;
  }
  hideRotationAxis() {
    const axisMesh = this.getObjectByName("axis");
    if (axisMesh) {
      axisMesh.visible = false;
    }
  }
}

const textureLoader = new Texture2DLoader();
