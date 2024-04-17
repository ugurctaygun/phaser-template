import { Scene, GameObjects } from "phaser";
import Character from "../entities/Character";
import UIScene from "./UIScene";

class PlayScene extends Scene {
  private button?: GameObjects.Text;
  private background?: GameObjects.Image;
  private uiScene?: Phaser.Scene;

  constructor() {
    super({ key: "PlayScene" });
  }

  init() {
    this.uiScene = this.scene.get('UIScene');
  }

  create(): void {
    this.createBG();
    this.createCharacter();
  }

  createCharacter(): void {
    const knight = new Character(this, 550, 550, "Knight");
    this.add.existing(knight)
  }

  createBG(): void {
    this.background = this.add.image(0, 0, "sky").setOrigin(0);
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;
  }
}

export default PlayScene;
