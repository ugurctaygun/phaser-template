import { AUTO, Game } from "phaser";
import PlayScene from "./scenes/PlayScene";
import PreloadScene from './scenes/Preload';
import MenuScene from "./scenes/MenuScene";


const WIDTH = 1280;
const HEIGHT = 720;

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
};

const Scenes = [PreloadScene, MenuScene , PlayScene];
const createScene = Scene => new Scene(SHARED_CONFIG)
const initScenes = () => Scenes.map(createScene)

const config = {
  type: AUTO,
  pixelArt: true,
  ...SHARED_CONFIG,
  parent: "phaser-container",
  dom: {
    createContainer: true
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  scene: initScenes()
};

new Game(config);
