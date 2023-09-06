export default {
  name: "solar-system",
  stars: [
    {
      name: "sun",
      texture: "./sun-moon-stars/2k_sun.jpg",
      size: 24,
      rotation: {
        period: 27,
      },
    },
  ],
  planets: [
    {
      name: "mercury",
      texture: "./planets/2k_mercury.jpg",
      size: 1.5,
      revolution: {
        period: 87.97,
        radius: 40,
      },
      rotation: {
        period: 58.646,
        axis: 0,
      },
    },
    {
      name: "venus",
      texture: "./planets/2k_venus_atmosphere.jpg",
      size: 3.72,
      revolution: {
        period: 224.7,
        radius: 55,
      },
      rotation: {
        period: 243,
        axis: 177.3,
      },
    },
    {
      name: "earth",
      texture: "./earth/2k_earth_daymap.jpg",
      size: 3.92,
      revolution: {
        period: 365.24,
        radius: 70,
      },
      rotation: {
        period: 0.99726968,
        axis: 23.4,
      },
    },
    {
      name: "mars",
      texture: "./planets/2k_mars.jpg",
      size: 2.9,
      revolution: {
        period: 686.93,
        radius: 90,
      },
      rotation: {
        period: 1.026,
        axis: 25.2,
      },
    },
    {
      name: "jupiter",
      texture: "./planets/2k_jupiter.jpg",
      size: 12,
      revolution: {
        period: 11.8565 * 365,
        radius: 120,
      },
      rotation: {
        period: 0.41354,
        axis: 3.1,
      },
    },
    {
      name: "saturn",
      texture: "./planets/2k_saturn.jpg",
      size: 10.8,
      ring: "./planets/2k_saturn_ring_alpha.png",
      revolution: {
        period: 29.448 * 365,
        radius: 160,
      },
      rotation: {
        period: 0.44401,
        axis: 26.7,
      },
    },
    {
      name: "uranus",
      texture: "./planets/2k_uranus.jpg",
      size: 4.68,
      revolution: {
        period: 84.02 * 365,
        radius: 190,
      },
      rotation: {
        period: 0.718,
        axis: 97.8,
      },
    },
    {
      name: "neptune",
      texture: "./planets/2k_neptune.jpg",
      size: 4.9,
      revolution: {
        period: 164.79 * 365,
        radius: 220,
      },
      rotation: {
        period: 0.67125,
        axis: 28.3,
      },
    },
  ],
};
