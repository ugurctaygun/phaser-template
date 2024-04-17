import { Scene } from "phaser";
import Grid from "../entities/Grid";

interface UISceneConfig {
  height: number;
  width: number;
}

class UIScene extends Phaser.Scene {
  private grid?: Grid;
  private config: UISceneConfig;
  private playScene: Phaser.Scene;
  private htmlElement?: Phaser.GameObjects.DOMElement;
  
  constructor(config) {
    super({ key: "UIScene", active: true });
    this.config = config;

    this.grid = new Grid({
      scene: this,
      rows: 16,
      cols: 32,
      height: this.config.height,
      width: this.config.width,
    });

  }

  preload() {}

  init() {
    this.playScene = this.scene.get("PlayScene");
   
  }

  create() {
    this.createCustomHTMLElement();
  }

  createCustomHTMLElement() {
    this.htmlElement  = this.add.dom(0, 0, "custom-element");
    this.grid?.placeAtIndex(47, this.htmlElement);
    console.log(this.htmlElement)
  }
}

export default UIScene;
