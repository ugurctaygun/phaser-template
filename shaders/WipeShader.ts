import { CustomPipeline } from './CustomPipeline';

const frag = `
#define SHADER_NAME WIPE_POST_FX

#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D uMainSampler;
// coordinate from the vertex shader
varying vec2 outTexCoord;
uniform float uCutoff;

void main() {
  if (outTexCoord.x < uCutoff) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
  } else {
    gl_FragColor = texture2D(uMainSampler, outTexCoord);
  }
}
`;

export class WipePostFxPipeline extends CustomPipeline {
  constructor(game: Phaser.Game) {
    super(game, frag);
  }
}
