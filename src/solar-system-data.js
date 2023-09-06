// Ref: https://codepen.io/juliangarnier/pen/krNqZO

export default {
  name: "solar-system",
  stars: [
    {
      name: "sun",
      texture: "./sun-moon-stars/2k_sun.jpg",
      size: 24,
      position: [0, 0, 0],
    },
  ],
  planets: [
    {
      name: "mercury",
      texture: "./planets/2k_mercury.jpg",
      size: 1.5,
      position: [40, 0, 0],
      years: 2.89016,
    },
    {
      name: "venus",
      texture: "./planets/2k_venus_atmosphere.jpg",
      size: 3.72,
      position: [55, 0, 0],
      years: 7.38237,
    },
    {
      name: "earth",
      texture: "./earth/2k_earth_daymap.jpg",
      size: 3.92,
      position: [70, 0, 0],
      years: 12.00021,
    },
    {
      name: "mars",
      texture: "./planets/2k_mars.jpg",
      size: 2.9,
      position: [90, 0, 0],
      years: 22.57017,
    },
    {
      name: "jupiter",
      texture: "./planets/2k_jupiter.jpg",
      size: 12,
      position: [120, 0, 0],
      years: 142.35138,
    },
    {
      name: "saturn",
      texture: "./planets/2k_saturn.jpg",
      size: 10.8,
      position: [160, 0, 0],
      ring: "./planets/2k_saturn_ring_alpha.png",
      years: 353.36998,
    },
    {
      name: "uranus",
      texture: "./planets/2k_uranus.jpg",
      size: 4.68,
      position: [190, 0, 0],
      years: 1008.20215,
    },
    {
      name: "neptune",
      texture: "./planets/2k_neptune.jpg",
      size: 4.9,
      position: [220, 0, 0],
      years: 1977.49584,
    },
  ],
};
