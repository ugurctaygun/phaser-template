import Phaser from "phaser";

class Preload extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    const assets = [
      { name: "sky", path: "/assets/sky.png" },
      {
        name: "Knight-Attack",
        path: "/assets/Knight/_Attack.png",
        frameWidth: 150,
        frameHeight: 150,
        startFrame: 0,
        endFrame: 3,
      },
      {
        name: "Knight-Idle",
        path: "/assets/Knight/_Idle.png",
        frameWidth: 150,
        frameHeight: 150,
        startFrame: 0,
        endFrame: 3,
      },
    ];

    assets.forEach((asset) => {
      if (asset.frameWidth && asset.frameHeight) {
        this.load.spritesheet(asset.name, asset.path, {
          frameWidth: asset.frameWidth,
          frameHeight: asset.frameHeight,
          startFrame: asset.startFrame || 0,
          endFrame: asset.endFrame || 0,
        });
      } else {
        this.load.image(asset.name, asset.path);
      }
    });

  }

  create() {
    this.scene.start("PlayScene");
  }
}

export default Preload;
