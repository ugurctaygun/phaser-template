import { Scene, GameObjects } from "phaser";
import Character from "../entities/Character";

class PlayScene extends Scene {
  private button?: GameObjects.Text;
  private background?: GameObjects.Image;

  constructor() {
    super({ key: "PlayScene" });
  }

  create(): void {
    this.createBG();
    this.createCharacter();
  }

  createCharacter(): void {
    const villager = new Character(this, 550, 550, "Knight");
    this.add.existing(villager)
  }

  createBG(): void {
    this.background = this.add.image(0, 0, "sky").setOrigin(0);
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;
  }
}

export default PlayScene;
