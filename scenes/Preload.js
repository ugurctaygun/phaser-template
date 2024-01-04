import Phaser from "phaser";

class Preload extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    const assets = [
      { name: "sky", path: "/assets/sky.png" },
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
