import { Scene } from "phaser";

class MenuScene extends Scene {
  constructor(config) {
    super("MenuScene");
    this.config = config;
  }

  create() {
    this.createBG();
    this.sceneChange();
  }

  sceneChange() {
    this.button = this.add
      .text(10, 20, "Switch to Scene Map", {
        fontSize: "24px",
        fill: "#af0e0e",
        border: "1px solid",
      })
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.switch("MapScene");
      });
  }

  createBG() {
    this.background = this.add.image(0, 0, "sky").setOrigin(0);
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;
  }
}

export default MenuScene;
