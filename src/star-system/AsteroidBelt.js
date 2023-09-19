import {
  Buffer,
  Attribute,
  Matrix4,
  Mesh,
  Object3D,
  Quaternion,
  Vector3,
  Euler,
  BUFFER_USAGE,
} from "t3d";
import { GLTFLoader } from "t3d/addons/loaders/gltf/GLTFLoader.js";
import { Scaler } from "./utils.js";
import { InstancedPBRMaterial } from "../vendors/InstancedPBRMaterial.js";

export default class AsteroidBelt extends Object3D {
  constructor(beltData) {
    super();

    this.name = "asteroid-belt";

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

        const instancedMaterial = new InstancedPBRMaterial(
          root.children[0].material
        );

        const matrices = [];
        for (let i = 0; i < beltData.count; i++) {
          const ratio = Math.random();
          const radiusX = deltaRadius * ratio + innerRadius;
          const rangeY =
            (Math.random() > 0.5 ? 1 : -1) *
            (Math.cos((ratio - 0.5) * Math.PI) * height +
              Math.random() * height -
              halfHeight);
          const theta = Math.random() * Math.PI * 2;

          _position.x = radiusX * Math.cos(theta);
          _position.z = radiusX * Math.sin(theta);
          _position.y = rangeY * Math.random();

          _quaternion.x = Math.random() * 2 - 1;
          _quaternion.y = Math.random() * 2 - 1;
          _quaternion.z = Math.random() * 2 - 1;
          _quaternion.w = Math.random() * 2 - 1;
          _quaternion.normalize();

          const mainScale =
            Math.random() * beltData.scale[0] + beltData.scale[1];
          _scale.x = (Math.random() * 0.5 + 0.5) * mainScale;
          _scale.y = (Math.random() * 0.5 + 0.5) * mainScale;
          _scale.z = (Math.random() * 0.5 + 0.5) * mainScale;

          _matrix.transform(_position, _scale, _quaternion);
          _matrix.toArray(matrices, i * 16);
        }

        const instancedGeometry = root.children[0].geometry.clone();
        const instancedBuffer = new Buffer(new Float32Array(matrices), 16);
        instancedBuffer.usage = BUFFER_USAGE.DYNAMIC_DRAW;
        const instanceMatrixAttribute = new Attribute(instancedBuffer);
        instanceMatrixAttribute.divisor = 1;
        instancedGeometry.addAttribute(
          "instanceMatrix",
          instanceMatrixAttribute
        );
        instancedGeometry.instanceCount = beltData.count;

        const mesh = new Mesh(instancedGeometry, instancedMaterial);
        this.add(mesh);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  update(deltaTime) {
    const mesh = this.children[0];
    if (mesh) {
      const matricesAttribute = mesh.geometry.getAttribute("instanceMatrix");

      _moveEuler.y = deltaTime;
      _tmpQ.setFromEuler(_moveEuler);
      _tmpQ.toMatrix4(_rotationMatrix);

      for (let i = 0, il = matricesAttribute.buffer.count; i < il; i++) {
        const offset = i * 16;
        _matrix.fromArray(matricesAttribute.buffer.array, offset);
        _matrix.multiply(_rotationMatrix);
        _matrix.toArray(matricesAttribute.buffer.array, offset);
      }

      matricesAttribute.buffer.version++;
    }

    this.euler.y += deltaTime / 20;
  }
}

const _gltfLoader = new GLTFLoader();

const _position = new Vector3();
const _scale = new Vector3();
const _quaternion = new Quaternion();
const _matrix = new Matrix4();

const _moveEuler = new Euler();
const _tmpQ = new Quaternion();
const _rotationMatrix = new Matrix4();
