import { Scene } from "phaser";

class MenuScene extends Scene {
  private button: Phaser.GameObjects.Text;
  private background: Phaser.GameObjects.Image;
  private config: string | Phaser.Types.Scenes.SettingsConfig;

  constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
    super("MenuScene");
    this.config = config;
  }

  create(): void {
    this.createBG();
    this.sceneChange();
  }

  private sceneChange(): void {
    this.button = this.add
      .text(10, 20, "Switch to Scene Map", {
        fontSize: "24px"
      })
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.switch("MapScene");
      });
  }

  private createBG(): void {
    this.background = this.add.image(0, 0, "sky").setOrigin(0);
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;
  }
}

export default MenuScene;