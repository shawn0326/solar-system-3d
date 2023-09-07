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
    this.starsContainer.children.forEach((star) => {
      star.update(deltaTime);
    });
    this.planetsContainer.children.forEach((planet) => {
      planet.update(deltaTime);
    });
  }
}

const textureLoader = new Texture2DLoader();

const unitSphereGeometry = new SphereGeometry(1, 64, 32);

class Star extends Object3D {
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

class Planet extends Object3D {
  constructor(planetData) {
    const { name, color, texture, size, ring, revolution, rotation } =
      planetData;

    const mesh = new Mesh(unitSphereGeometry, new PBRMaterial());
    mesh.name = name + "-mesh";
    mesh.scale.set(size, size, size);
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
    this._revolutionSpeed = ((2 * Math.PI) / revolution.period) * 10;
    this._revolutionSperical = new Spherical();
    this._revolutionSperical.phi = Math.PI / 2;
    this._revolutionSperical.theta = Math.random() * 2 * Math.PI; // random start
    this._revolutionSperical.radius = revolution.radius;

    // rotation
    this.euler.z = (rotation.axis / 180) * Math.PI;
    this._rotationSpeed = ((2 * Math.PI) / rotation.period) * 0.3;
  }

  update(deltaTime) {
    // revolution
    this._revolutionSperical.theta += this._revolutionSpeed * deltaTime;
    this._revolutionSperical.theta =
      this._revolutionSperical.theta % (2 * Math.PI);
    this.position.setFromSpherical(this._revolutionSperical);

    // rotation
    this._mesh.euler.y += this._rotationSpeed * deltaTime;
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

class PlanetRing extends Mesh {
  constructor(planetData) {
    const { name, size, ring } = planetData;

    const geometry = new RingGeometry(size * 1.1, size * 2.0);

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

class CircularOrbit extends Mesh {
  constructor(planetData) {
    const { name, revolution } = planetData;

    // TODO: use shared geometry
    const geometry = new Geometry();
    const positions = [];
    for (let i = 0; i <= 360; i++) {
      const x = revolution.radius * Math.cos((i / 180) * Math.PI);
      const z = revolution.radius * Math.sin((i / 180) * Math.PI);
      positions.push(x, 0, z);
    }
    geometry.addAttribute(
      "a_Position",
      new Attribute(new Buffer(new Float32Array(positions), 3))
    );
    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();

    const material = new BasicMaterial();
    material.diffuse.setRGB(
      (1 - revolution.radius / 250) * 0.2,
      (1 - revolution.radius / 250) * 0.2,
      (1 - revolution.radius / 250) * 0.2
    );
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
