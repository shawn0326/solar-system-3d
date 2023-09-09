import {
  Geometry,
  PBRMaterial,
  Mesh,
  TEXEL_ENCODING_TYPE,
  Attribute,
  Buffer,
  DRAW_SIDE,
} from "t3d";
import { Texture2DLoader } from "t3d/addons/loaders/Texture2DLoader.js";
import { Scaler } from "./utils.js";

export default class PlanetRing extends Mesh {
  constructor(planetData) {
    const { name, size, ring } = planetData;

    const _size = Scaler.scalePlanetRadius(size) * 2;
    const geometry = new RingGeometry(_size * 1.1, _size * 2.0);

    const material = new PBRMaterial();
    material.metalness = 0.3;
    material.roughness = 0.7;
    material.emissive.setRGB(0.01, 0.01, 0.01);
    material.transparent = true;
    material.side = DRAW_SIDE.DOUBLE;
    material.diffuseMap = textureLoader.load(ring);
    material.diffuseMap.encoding = TEXEL_ENCODING_TYPE.SRGB;

    super(geometry, material);

    this.name = name + "-ring";
  }
}

const textureLoader = new Texture2DLoader();

class RingGeometry extends Geometry {
  constructor(innerRadius, outerRadius, thetaSegments = 64) {
    super();

    const positions = [],
      uvs = [],
      normals = [],
      indices = [];

    const step = (2 * Math.PI) / thetaSegments;
    for (let i = 0; i <= thetaSegments; i++) {
      const rad = i * step;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      positions.push(cos * innerRadius, 0, sin * innerRadius);
      positions.push(cos * outerRadius, 0, sin * outerRadius);
      uvs.push(0, i / thetaSegments);
      uvs.push(1, i / thetaSegments);
      normals.push(0, 1, 0);
      normals.push(0, 1, 0);
      if (i < thetaSegments) {
        indices.push(i * 2, i * 2 + 2, i * 2 + 1);
        indices.push(i * 2 + 1, i * 2 + 2, i * 2 + 3);
      }
    }

    this.addAttribute(
      "a_Position",
      new Attribute(new Buffer(new Float32Array(positions), 3))
    );
    this.addAttribute(
      "a_Uv",
      new Attribute(new Buffer(new Float32Array(uvs), 2))
    );
    this.addAttribute(
      "a_Normal",
      new Attribute(new Buffer(new Float32Array(normals), 3))
    );
    this.setIndex(new Attribute(new Buffer(new Uint16Array(indices), 1)));

    this.computeBoundingBox();
    this.computeBoundingSphere();
  }
}
