import { Object3D } from "t3d";
import { GLTFLoader } from "t3d/addons/loaders/gltf/GLTFLoader.js";
import { Scaler } from "./utils.js";

export default class AsteroidBelt extends Object3D {
  constructor(beltData) {
    super();

    this.name = "asteroid-belt";

    // TODO read from data
    const innerRadius = Scaler.scaleRevolutionRadius(beltData.radius[0]);
    const outerRadius = Scaler.scaleRevolutionRadius(beltData.radius[1]);
    const height = beltData.height;

    const deltaRadius = outerRadius - innerRadius;
    const halfHeight = height / 2;

    _gltfLoader
      .load(beltData.model)
      .then((result) => {
        const { root } = result;
        root.children[0].material.emissive.setHex(beltData.emissive);

        // TODO use instanced mesh

        for (let i = 0; i < beltData.count; i++) {
          const asteroid = root.clone();

          const ratio = Math.random();
          const radiusX = deltaRadius * ratio + innerRadius;
          const rangeY =
            (Math.random() > 0.5 ? 1 : -1) *
            (Math.cos((ratio - 0.5) * Math.PI) * height +
              Math.random() * height -
              halfHeight);
          const theta = Math.random() * Math.PI * 2;

          asteroid.position.x = radiusX * Math.cos(theta);
          asteroid.position.z = radiusX * Math.sin(theta);
          asteroid.position.y = rangeY * Math.random();

          asteroid.quaternion.x = Math.random() * 2 - 1;
          asteroid.quaternion.y = Math.random() * 2 - 1;
          asteroid.quaternion.z = Math.random() * 2 - 1;
          asteroid.quaternion.w = Math.random() * 2 - 1;
          asteroid.quaternion.normalize();

          const mainScale =
            Math.random() * beltData.scale[0] + beltData.scale[1];
          asteroid.scale.x = (Math.random() * 0.5 + 0.5) * mainScale;
          asteroid.scale.y = (Math.random() * 0.5 + 0.5) * mainScale;
          asteroid.scale.z = (Math.random() * 0.5 + 0.5) * mainScale;

          this.add(asteroid);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  update(deltaTime) {
    // TODO beautify
    this.children.forEach((asteroid) => {
      asteroid.euler.y += deltaTime;
    });
    this.euler.y += deltaTime / 20;
  }
}

const _gltfLoader = new GLTFLoader();
