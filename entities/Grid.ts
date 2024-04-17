export default class Grid {
    config: {
        scene: Phaser.Scene;
        rows?: number;
        cols?: number;
        height?: number;
        width?: number;
    };
    rows: number;
    cols: number;
    height: number;
    width: number;
    scene: Phaser.Scene;
    cw: number;
    ch: number;

    constructor(config: {
        scene: Phaser.Scene;
        rows?: number;
        cols?: number;
        height?: number;
        width?: number;
    }) {
        this.config = config;
        if (!config.scene) {
            return;
        }
        this.rows = config.rows || 5;
        this.cols = config.cols || 5;
        this.height = config.height || game.config.height;
        this.width = config.width || game.config.width;
        this.scene = config.scene;
        this.cw = this.width / this.cols;
        this.ch = this.height / this.rows;
    }
    show() {
        this.graphics = this.scene.add.graphics();
        this.graphics.lineStyle(2, 0xff0000);
      
        for (let i = 0; i < this.config.width; i += this.cw) {
            this.graphics.moveTo(i, 0);
            this.graphics.lineTo(i, this.config.height);
        }
      
        for (let i = 0; i < this.config.height; i += this.ch) {
            this.graphics.moveTo(0, i);
            this.graphics.lineTo(this.config.width, i);
        }
      
        this.graphics.strokePath();
    }
  
    placeAt(xx, yy, obj) {
        let x2 = this.cw * xx + this.cw / 2;
        let y2 = this.ch * yy + this.ch / 2;
      
        obj.x = x2;
        obj.y = y2;
    }
  
    placeAtIndex(index, obj) {
        let yy = Math.floor(index / this.config.cols);
        let xx = index - yy * this.config.cols;
      
        this.placeAt(xx, yy, obj);
    }
  
    getPositionAtIndex(index) {
        const row = Math.floor(index / this.cols);
        const col = index % this.cols;
      
        const x = (col + 0.5) * this.cw;
        const y = (row + 0.5) * this.ch;
      
        return { x, y };
    }
  
    placeAtCenter(obj) {
        const centerX = this.config.width / 2;
        const centerY = this.config.height / 2;
      
        obj.x = centerX;
        obj.y = centerY;
    }
  
    showNumbers() {
        this.show();
        let count: number = 0;
        for (let i = 0; i < this.config.rows; i++) {
            for (let j = 0; j < this.config.cols; j++) {
                let numText = this.scene.add.text(0, 0, count.toString(), { color: "#ff0000" });
                numText.setOrigin(0.5, 0.5);
                this.placeAtIndex(count, numText);
              
                count++;
            }
        }
    }
}
