import { Scene } from "phaser";

interface Asset {
  name: string;
  path: string;
  frameWidth?: number;
  frameHeight?: number;
  startFrame?: number;
  endFrame?: number;
}

class PreloadScene extends Scene {
  constructor() {
    super({ key: "PreloadScene" });
  }

  preload(): void {
    const assets: Asset[] = [
      { name: "sky", path: "/assets/sky.png" },
      {
        name: "Knight-Idle",
        path: "/assets/Knight/Idle.png",
        frameWidth: 120,
        frameHeight: 80,
        startFrame: 0,
        endFrame: 10,
      },
    ];

    for (let i = 0; i < assets.length; i++) {
      const asset = assets[i];

      if (asset.frameWidth && asset.frameHeight) {
        this.load.spritesheet(asset.name, asset.path, {
          frameWidth: asset.frameWidth,
          frameHeight: asset.frameHeight,
          startFrame: asset.startFrame || 0,
          endFrame: asset.endFrame || 0,
        } as Phaser.Types.Loader.FileTypes.ImageFrameConfig);
      } else {
        this.load.image(asset.name, asset.path);
      }
    }
  }

  create(): void {
    this.scene.start("PlayScene");
  }
}

export default PreloadScene;
