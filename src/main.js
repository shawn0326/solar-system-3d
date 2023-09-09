import { AmbientLight, TEXEL_ENCODING_TYPE } from "t3d";
import { Texture2DLoader } from "t3d/addons/loaders/Texture2DLoader.js";
import { SkyBox } from "t3d/addons/objects/SkyBox.js";
import SolarSystemData from "./solar-system-data.js";
import StarSystem from "./star-system/StarSystem.js";
import RenderEngine from "./RenderEngine.js";

const renderEngine = new RenderEngine();

const skyBox = new SkyBox();
skyBox.texture = new Texture2DLoader().load(
  "./sun-moon-stars/2k_stars_milky_way.jpg"
);
skyBox.texture.encoding = TEXEL_ENCODING_TYPE.SRGB;
renderEngine.scene.add(skyBox);

const ambientLight = new AmbientLight(0xffffff, 0.12);
renderEngine.scene.add(ambientLight);

const solarSystem = new StarSystem(SolarSystemData);
renderEngine.scene.add(solarSystem);

renderEngine.loop = function (deltaTime) {
  solarSystem.update(deltaTime);
};
