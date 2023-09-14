import { Object3D } from "t3d";
import Star from "./Star.js";
import Planet from "./Planet.js";
import CircularOrbit from "./CircularOrbit.js";
import AsteroidBelt from "./AsteroidBelt.js";

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

    this.beltsContainer = new Object3D();
    this.beltsContainer.name = data.name + "-belts-container";
    this.add(this.beltsContainer);

    data.stars.forEach((starData) => {
      this.starsContainer.add(new Star(starData));
    });

    data.planets.forEach((planetData) => {
      this.planetsContainer.add(new Planet(planetData));
      this.orbitsContainer.add(new CircularOrbit(planetData));
    });

    data.belts.forEach((beltData) => {
      this.beltsContainer.add(new AsteroidBelt(beltData));
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
    this.beltsContainer.children.forEach((belt) => {
      belt.update(deltaTime);
    });
  }
}
