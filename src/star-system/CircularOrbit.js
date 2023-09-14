import {
  Geometry,
  BasicMaterial,
  Mesh,
  Attribute,
  Buffer,
  DRAW_MODE,
} from "t3d";
import { Scaler } from "./utils.js";

export default class CircularOrbit extends Mesh {
  constructor(planetData) {
    const { name, revolution } = planetData;

    const material = new BasicMaterial();
    material.diffuse.setHex(0x080808);
    material.drawMode = DRAW_MODE.LINE_STRIP;

    super(_unitCircularOrbitGeometry, material);
    const _radius = Scaler.scaleRevolutionRadius(revolution.radius);
    this.scale.set(_radius, 1, _radius);

    this.name = name + "-orbit";
  }
}

class CircularOrbitGeometry extends Geometry {
  constructor(radius, segments = 128) {
    super();

    const positions = [];

    const step = (2 * Math.PI) / segments;
    for (let i = 0; i <= segments; i++) {
      const rad = i * step;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      positions.push(radius * cos, 0, radius * sin);
    }

    this.addAttribute(
      "a_Position",
      new Attribute(new Buffer(new Float32Array(positions), 3))
    );
    this.computeBoundingBox();
    this.computeBoundingSphere();
  }
}

const _unitCircularOrbitGeometry = new CircularOrbitGeometry(1);
