import { Object3D, BasicMaterial, Mesh, PointLight } from "t3d";
import { Texture2DLoader } from "t3d/addons/loaders/Texture2DLoader.js";
import { unitSphereGeometry } from "./utils.js";

export default class Star extends Object3D {
  constructor(starData) {
    const { name, color, texture, size, rotation } = starData;

    const mesh = new Mesh(unitSphereGeometry, new BasicMaterial());
    mesh.name = name + "-mesh";
    mesh.scale.set(size, size, size);
    mesh.material.diffuse.setHex(color);
    textureLoader.loadAsync(texture).then((_texture) => {
      mesh.material.diffuse.setHex(0xffffff);
      mesh.material.diffuseMap = _texture;
      mesh.material.needsUpdate = true;
    });

    const pointLight = new PointLight(0xffffff, 1.2);
    pointLight.name = name + "-light";
    pointLight.distance = 300;
    pointLight.decay = 0.8;

    super();

    this.name = name;

    this.add(mesh);
    this.add(pointLight);

    // rotation
    this._rotationSpeed = ((2 * Math.PI) / rotation.period) * 0.3;
  }

  update(deltaTime) {
    // rotation
    this.euler.y += this._rotationSpeed * deltaTime;
  }
}

const textureLoader = new Texture2DLoader();
