class RainbowText extends Phaser.Text {
    constructor (game, x, y, text, style) {
        super(game, x, y, text, style);

        this._speed = 125; // ms
        this._colorIndex = 0;
        //this._colors = ['#ee4035', '#f37736', '#fdf498', '#7bc043', '#0392cf'];
        this._colors = ['#bfbfbf', '#a9a9a9', '#7d9598', '#4bc0ba', '#2dcfc7'];

        this.colorize();
        this.startTimer();

        this.game.world.addChild(this);
    }

    startTimer () {
        this.game.time.events.loop(this._speed, this.colorize, this).timer.start();
    }

    colorize () {
        for (let i = 0; i < this.text.length; i++) {
            if (this._colorIndex === this._colors.length) {
                this._colorIndex = 0;
            }

            this.addColor(this._colors[this._colorIndex], i);
            this._colorIndex++;
        }
    }
    
}

export default RainbowText;
