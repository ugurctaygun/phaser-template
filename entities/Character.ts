class Character extends Phaser.Physics.Arcade.Sprite {
  public scene: Phaser.Scene;
  public x: number;
  public y: number;
  public key: string;

  constructor(scene: Phaser.Scene, x: number, y: number, key: string) {
    super(scene, x, y, key);
    this.scene = scene;
    this.key = key;
    this.x = x;
    this.y = y;
    this.init();
  }

  init() {
    this.displayWidth = 65;
    this.displayHeight = 65;
    this.scaleY = this.scaleX;
    this.setOrigin(0);
    this.initAnimations(this.scene.anims, this.key);
    this.idle();
  }

  idle() {
    this.play(`${this.key}-Idle`);
  }

  initAnimations(anims, spriteKey) {
    anims.create({
      key: `${spriteKey}-Idle`,
      frames: anims.generateFrameNumbers("Knight-Idle", {
        start: 0,
        end: 10,
      }),
      frameRate: 5,
      repeat: -1,
    });
  }
}

export default Character;
