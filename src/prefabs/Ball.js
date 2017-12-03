class Ball extends Phaser.Sprite {

    constructor (game, x, y, key){
        super(game, x, y, key);
        this._game = game;
        this.anchor.setTo(0.5);
        this._isLaunched = false;


        this._game.physics.arcade.enable(this);
        this.body.bounce.setTo(1, 1);
        this.body.collideWorldBounds = true;

    }

    launch (x = Math.random(400) - 200, y = -200) {
        this.body.velocity.setTo(x, y);
        this._isLaunched = true;
    }

}
export default Ball;