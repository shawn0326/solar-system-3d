import {
  WebGLRenderer,
  RenderTargetBack,
  Scene,
  Camera,
  TEXEL_ENCODING_TYPE,
} from "t3d";
import { OrbitControls } from "t3d/addons/controls/OrbitControls.js";
import {
  EffectComposer,
  ToneMappingEffect,
  ToneMappingType,
} from "t3d-effect-composer";
import UnrealBloomEffect from "./UnrealBloomEffect.js";

export default class RenderEngine {
  constructor() {
    const devicePixelRatio = window.devicePixelRatio;

    let width = window.innerWidth || 2;
    let height = window.innerHeight || 2;

    const canvas = document.createElement("canvas");
    canvas.width = Math.floor(width * devicePixelRatio);
    canvas.height = Math.floor(height * devicePixelRatio);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    document.body.appendChild(canvas);

    const gl = canvas.getContext("webgl2", {
      antialias: true,
      alpha: false,
    });
    const renderer = new WebGLRenderer(gl);

    const effectComposer = new EffectComposer(width, height, {
      webgl2: true,
      highDynamicRange: true,
      samplerNumber: Math.min(renderer.capabilities.maxSamples, 5),
      floatColorBuffer: !!renderer.capabilities.getExtension(
        "EXT_color_buffer_float"
      ),
    });
    effectComposer.sceneMSAA = true;

    const toneMappingEffect = new ToneMappingEffect();
    toneMappingEffect.toneMapping = ToneMappingType.ACESFilmic;
    toneMappingEffect.toneMappingExposure = 1;
    toneMappingEffect.outputColorSpace = TEXEL_ENCODING_TYPE.SRGB;
    effectComposer.addEffect("ToneMapping", toneMappingEffect, 199);

    const bloomEffect = new UnrealBloomEffect();
    bloomEffect.strength = 0.3;
    bloomEffect.threshold = 0.3;
    bloomEffect.radius = 0;
    bloomEffect.smoothWidth = 0.1;
    effectComposer.addEffect("Bloom", bloomEffect, 100);

    const backRenderTarget = new RenderTargetBack(canvas);

    const scene = new Scene();

    const camera = new Camera();
    camera.position.set(0, 200, 800);
    camera.setPerspective((45 / 180) * Math.PI, width / height, 10, 10000);
    scene.add(camera);

    const controls = new OrbitControls(camera, canvas);
    // controls.enablePan = false;

    let currentTime = 0;

    const loop = (time) => {
      requestAnimationFrame(loop);

      const deltaTime = time - currentTime;
      currentTime = time;

      this._loop(deltaTime / 1000);

      controls.update();

      scene.updateMatrix();
      scene.updateRenderStates(camera);
      scene.updateRenderQueue(camera);

      renderer.setClearColor(0.1, 0.1, 0.1, 1);
      effectComposer.render(renderer, scene, camera, backRenderTarget);
    };
    requestAnimationFrame(loop);

    function onWindowResize() {
      width = window.innerWidth || 2;
      height = window.innerHeight || 2;

      camera.setPerspective((45 / 180) * Math.PI, width / height, 10, 10000);

      backRenderTarget.resize(
        Math.floor(width * devicePixelRatio),
        Math.floor(height * devicePixelRatio)
      );

      effectComposer.resize(width, height);

      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
    }
    window.addEventListener("resize", onWindowResize, false);

    this._scene = scene;
    this._loop = function () {};
  }

  get scene() {
    return this._scene;
  }

  set loop(loop) {
    this._loop = loop;
  }
}
