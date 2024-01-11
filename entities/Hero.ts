import StateMachine from "../state/StateMachine";

class Hero {
  constructor(scene) {
    scene.add.existing(this);

    this.scene = scene;

    this.stateMachine = new StateMachine(this);

    this.init();
  }

  init() {
    this.displayWidth = 60;
    this.displayHeight = 60;
    this.scaleY = this.scaleX;
    this.setOrigin(0);
    this.initAnimations(this.scene.anims, this.name);

    this.createStates();
    this.stateMachine.transition("enterScene");

  }


  transitionToAttack() {
    if (this.active) {
      if (this.scene.data.get("enemies").length === 0) {
        this.scene.events.emit("waveCleared");
        console.log("emitting 1");
      } else {
        this.stateMachine.transition("attack");
      }
    }
  }


  attack() {
    const attackAnimation = this.play(`1_atk`);
    let target = this.getTarget();
    this.scene.events.emit("heroAttacked", this, target);
    attackAnimation.once("animationcomplete", () => {
      this.stateMachine.transition("idle");
    });
  }

  idle() {
    this.play({ key: "idle", repeat: -1 });
  }

  initAnimations(anims, spriteKey) {
    anims.create({
      key: `${spriteKey}-Idle`,
      frames: anims.generateFrameNumbers(`${spriteKey}-Idle`),
      frameRate: 5,
      repeat: -1,
    });
    anims.create({
      key: `${spriteKey}-Attack`,
      frames: anims.generateFrameNumbers(`${spriteKey}-Attack`),
      frameRate: 10,
      repeat: 0,
    });
  }

}

export default Hero;
