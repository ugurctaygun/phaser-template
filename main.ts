import { AUTO, Game, Scene } from "phaser";
import PlayScene from "./scenes/PlayScene";
import PreloadScene from "./scenes/Preload";

interface GameConfig extends Phaser.Types.Core.GameConfig {
  scene: Scene[];
} 

const config: GameConfig = {
  type: AUTO,
  pixelArt: true,
  parent: "phaser-container",
  dom: {
    createContainer: true,
  },
  scale: {
    width: 1280,
    height: 720,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.NO_CENTER
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  scene: [new PreloadScene, new PlayScene],
};

new Game(config);

