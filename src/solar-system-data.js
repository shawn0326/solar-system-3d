// radius - unit is km
// revolution.period, rotation.period - unit is Earth day
// revolution.radius - unit is A.U., 1 A.U. = 149597870.7 km

export default {
  name: "solar-system",
  stars: [
    {
      name: "sun",
      color: 0xffab2c,
      texture: "./sun-moon-stars/2k_sun.jpg",
      size: 24,
      radius: 695700,
      rotation: {
        period: 27,
      },
    },
  ],
  planets: [
    {
      name: "mercury",
      color: 0x5f5f5f,
      texture: "./planets/2k_mercury.jpg",
      size: 1.5,
      radius: 2439.7,
      revolution: {
        period: 87.97,
        radius: 0.38,
      },
      rotation: {
        period: 58.646,
        axis: 0,
      },
    },
    {
      name: "venus",
      color: 0xecc584,
      texture: "./planets/2k_venus_atmosphere.jpg",
      size: 3.72,
      radius: 6051.8,
      revolution: {
        period: 224.7,
        radius: 0.72,
      },
      rotation: {
        period: 243,
        axis: 177.3,
      },
    },
    {
      name: "earth",
      color: 0x1e3b75,
      texture: "./earth/2k_earth_daymap.jpg",
      size: 3.92,
      radius: 6371,
      revolution: {
        period: 365.24,
        radius: 1,
      },
      rotation: {
        period: 0.99726968,
        axis: 23.4,
      },
    },
    {
      name: "mars",
      color: 0xed7040,
      texture: "./planets/2k_mars.jpg",
      size: 2.9,
      radius: 3389.5,
      revolution: {
        period: 686.93,
        radius: 1.52,
      },
      rotation: {
        period: 1.026,
        axis: 25.2,
      },
    },
    {
      name: "jupiter",
      color: 0xbf9062,
      texture: "./planets/2k_jupiter.jpg",
      size: 12,
      radius: 69911,
      revolution: {
        period: 11.8565 * 365,
        radius: 5.2,
      },
      rotation: {
        period: 0.41354,
        axis: 3.1,
      },
    },
    {
      name: "saturn",
      color: 0xf7dcaf,
      texture: "./planets/2k_saturn.jpg",
      size: 10.8,
      radius: 58232,
      ring: "./planets/2k_saturn_ring_alpha.png",
      revolution: {
        period: 29.448 * 365,
        radius: 9.54,
      },
      rotation: {
        period: 0.44401,
        axis: 26.7,
      },
    },
    {
      name: "uranus",
      color: 0xa9dbe2,
      texture: "./planets/2k_uranus.jpg",
      size: 4.68,
      radius: 25362,
      revolution: {
        period: 84.02 * 365,
        radius: 19.2,
      },
      rotation: {
        period: 0.718,
        axis: 97.8,
      },
    },
    {
      name: "neptune",
      color: 0x395abb,
      texture: "./planets/2k_neptune.jpg",
      size: 4.9,
      radius: 24622,
      revolution: {
        period: 164.79 * 365,
        radius: 30.05,
      },
      rotation: {
        period: 0.67125,
        axis: 28.3,
      },
    },
  ],
  belts: [
    {
      name: "main belt",
      model: "./asteroid.glb",
      emissive: 0x010101,
      count: 500,
      radius: [2.17, 3.64],
      scale: [1.9, 0.1],
      height: 10,
    },
    {
      name: "kuiper belt",
      model: "./asteroid.glb",
      emissive: 0x080808,
      count: 1000,
      radius: [30.1, 50.3],
      scale: [2.0, 2.0],
      height: 50,
    },
  ],
};
