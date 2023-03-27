import Phaser from "phaser";
import { setupCounter } from "./counter.js";

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      // gravity: { y: 200 },
      debug: true,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image("sky", "assets/sky.png");
  this.load.image("bird", "/assets/bird.png");
  this.load.image("pipe", "/assets/pipe.png");
}

const PIPES = 4;
let bird = null;
let totalDelta = null;
let upperPipe = null;
let lowerPipe = null;
let startingPosition = { x: config.width * 0.1, y: config.height / 2 };
let horizontalDistance = Phaser.Math.Between(150, config.width);

function create() {
  this.add.image(0, 0, "sky").setOrigin(0);
  this.add.sprite(0, 0, "bird");

  var particles = this.add.particles("red");

  var emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: "ADD",
  });

  bird = this.physics.add
    .sprite(startingPosition.x, startingPosition.y, "bird")
    .setOrigin(0);
  bird.body.gravity.y = 200;

  for (let index = 0; index < PIPES; index++) {
    horizontalDistance += Phaser.Math.Between(250, 400);
    upperPipe = this.physics.add
      .sprite(
        horizontalDistance,
        Phaser.Math.Between(20, config.height / 2),
        "pipe"
      )
      .setOrigin(0, 1);
    lowerPipe = this.physics.add
      .sprite(
        horizontalDistance,
        upperPipe.y + Phaser.Math.Between(150, 250),
        "pipe"
      )
      .setOrigin(0, 0);

    upperPipe.body.velocity.x = -200;
    lowerPipe.body.velocity.x = -200;
  }

  emitter.startFollow(bird);

  this.input.on("pointerdown", flap);
}

function flap() {
  bird.body.velocity.y = -200;
}

function restartPlayerPosition() {
  bird.x = startingPosition.x;
  bird.y = startingPosition.y;
  bird.body.velocity.y = 0;
}

function update(time, delta) {
  if (bird.y > config.height || bird.y < -bird.height) {
    restartPlayerPosition();
  }
}
