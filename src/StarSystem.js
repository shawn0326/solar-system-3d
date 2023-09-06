import {
  Object3D,
  Geometry,
  SphereGeometry,
  BasicMaterial,
  PBRMaterial,
  Mesh,
  PointLight,
  TEXEL_ENCODING_TYPE,
  Attribute,
  Buffer,
  DRAW_MODE,
  Spherical,
  DRAW_SIDE,
} from "t3d";
import { Texture2DLoader } from "t3d/addons/loaders/Texture2DLoader.js";

export default class StarSystem extends Object3D {
  constructor(data) {
    super();

    this.name = data.name;

    this.starsContainer = new Object3D();
    this.starsContainer.name = data.name + "-stars-container";
    this.add(this.starsContainer);

    this.planetsContainer = new Object3D();
    this.planetsContainer.name = data.name + "-planets-container";
    this.add(this.planetsContainer);

    this.orbitsContainer = new Object3D();
    this.orbitsContainer.name = data.name + "-orbits-container";
    this.add(this.orbitsContainer);

    data.stars.forEach((starData) => {
      this.starsContainer.add(new Star(starData));
    });

    data.planets.forEach((planetData) => {
      this.planetsContainer.add(new Planet(planetData));
      this.orbitsContainer.add(new CircularOrbit(planetData));
    });

    console.log(this);
  }

  update(deltaTime) {
    this.planetsContainer.children.forEach((planet) => {
      planet.update(deltaTime);
    });
  }
}

const textureLoader = new Texture2DLoader();

class Star extends Object3D {
  constructor(starData) {
    const { name, texture, size, position } = starData;

    const geometry = new SphereGeometry(1, 64, 32);

    const material = new BasicMaterial();
    material.diffuseMap = textureLoader.load(texture);

    const mesh = new Mesh(geometry, material);
    mesh.name = name + "-mesh";
    mesh.scale.set(size, size, size);

    const pointLight = new PointLight(0xffffff, 1.2);
    pointLight.name = name + "-light";
    pointLight.distance = 300;
    pointLight.decay = 1;

    super();

    this.name = name;

    this.add(mesh);
    this.add(pointLight);

    this.position.fromArray(position);
  }
}

class Planet extends Object3D {
  constructor(planetData) {
    const { name, texture, size, ring, position } = planetData;

    const geometry = new SphereGeometry(size, 64, 32);

    const material = new PBRMaterial();
    material.metalness = 0.1;
    material.roughness = 0.8;
    material.diffuseMap = textureLoader.load(texture);
    material.diffuseMap.encoding = TEXEL_ENCODING_TYPE.SRGB;

    const mesh = new Mesh(geometry, material);
    mesh.name = name + "-mesh";

    super();

    this.add(mesh);

    if (ring) {
      this.add(new PlanetRing(planetData));
    }

    this.position.fromArray(position);

    this._mesh = mesh;
    this._orbitSpeed = (2 * Math.PI) / planetData.years;
    this._currentTheta = Math.random() * 2 * Math.PI;

    this._spherical = new Spherical();
    this._spherical.phi = Math.PI / 2;
    this._spherical.radius = position[0];
  }

  update(deltaTime) {
    this._currentTheta += this._orbitSpeed * deltaTime;
    this._spherical.theta = this._currentTheta % (2 * Math.PI);
    this.position.setFromSpherical(this._spherical);
  }
}

class PlanetRing extends Mesh {
  constructor(planetData) {
    const { name, size, ring } = planetData;

    const geometry = new RingGeometry(size * 1.1, size * 2.0);

    const material = new PBRMaterial();
    material.metalness = 0.3;
    material.roughness = 0.7;
    material.emissive.setRGB(0.04, 0.04, 0.03);
    material.transparent = true;
    material.side = DRAW_SIDE.DOUBLE;
    material.diffuseMap = textureLoader.load(ring);
    material.diffuseMap.encoding = TEXEL_ENCODING_TYPE.SRGB;

    super(geometry, material);

    this.name = name + "-ring";
  }
}

class CircularOrbit extends Mesh {
  constructor(planetData) {
    const { name, position } = planetData;

    const radius = position[0];
    const geometry = new Geometry();
    const positions = [];
    for (let i = 0; i <= 360; i++) {
      const x = radius * Math.cos((i / 180) * Math.PI);
      const z = radius * Math.sin((i / 180) * Math.PI);
      positions.push(x, 0, z);
    }
    geometry.addAttribute(
      "a_Position",
      new Attribute(new Buffer(new Float32Array(positions), 3))
    );
    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();

    const material = new BasicMaterial();
    material.diffuse.setRGB(0.1, 0.1, 0.1);
    material.drawMode = DRAW_MODE.LINE_STRIP;

    super(geometry, material);

    this.name = name + "-orbit";
  }
}

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
