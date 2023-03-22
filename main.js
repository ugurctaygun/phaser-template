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
}

let bird = null;
let totalDelta = null;

function create() {
  this.add.image(0, 0, "sky").setOrigin(0);
  this.add.sprite(0, 0, "bird");

  var particles = this.add.particles("red");

  var emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: "ADD",
  });

  bird = this.physics.add.sprite(400, 100, "bird");

  bird.setVelocity(100, 0);
  bird.setBounce(1, 1);
  bird.setCollideWorldBounds(true);

  emitter.startFollow(bird);
}

function update(time, delta) {
  if (totalDelta >= 1000) {
    console.log("here");
    totalDelta = 0;
  }
  totalDelta += delta;
}
