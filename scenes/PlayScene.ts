import { Scene, GameObjects } from "phaser";
import Character from "../entities/Character";
import { WipePostFxPipeline } from "../shaders/WipeShader";
import { CustomPipeline } from "../shaders/CustomPipeline";

class PlayScene extends Scene {
  private button?: GameObjects.Text;
  private background?: GameObjects.Image;
  private uiScene?: Phaser.Scene;

  constructor() {
    super({ key: "PlayScene" });
  }

  init() {
    this.uiScene = this.scene.get("UIScene");
  }

  create(): void {
    this.createBG();
    this.createCharacter();
    this.createShaderPlayButton();
    const renderer = this.renderer as Phaser.Renderer.WebGL.WebGLRenderer;
    renderer.pipelines.addPostPipeline(
      WipePostFxPipeline.name,
      WipePostFxPipeline
    );
    this.cameras.main.setPostPipeline(WipePostFxPipeline);
  }

  createCharacter(): void {
    const knight = new Character(this, 550, 550, "Knight");
    this.add.existing(knight);
  }

  createBG(): void {
    this.background = this.add.image(0, 0, "sky").setOrigin(0);
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;
  }

  createShaderPlayButton(): void {
    this.button = this.add.text(850, 50, "Play Shader", {
      color: "#000",
      fontSize: 24,
      backgroundColor: "#fff",
      padding: { x: 5, y: 5 },
      fontFamily: "roboto",
    });
    this.button.setDepth(10);
    this.button.setInteractive();
    this.button.on("pointerdown", () => {
      (this.cameras.main.getPostPipeline(WipePostFxPipeline) as CustomPipeline).progress = 0;
      this.tweens.add({
        targets: this.cameras.main.getPostPipeline(WipePostFxPipeline),
        progress: 1,
        duration: 1000,
        onComplete: () => {
          (this.cameras.main.getPostPipeline(WipePostFxPipeline) as CustomPipeline).progress = 0;
        },
      });
    });
  }
}

export default PlayScene;
