class Paddle extends Phaser.Sprite {

    constructor (game, x, y, key){
        super(game, x, y, key);
        this._game = game;
        this._y = y;
        this.anchor.setTo(0.5);

        //============================================================
        // set up arcade physics for Paddle
        //============================================================
        this._game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.body.immovable = true;

        //============================================================
        //Uncomment these lines to use cursor key movement
        //this.inputEnabled = true;
        //this.cursors = this.game.input.keyboard.createCursorKeys();
        //============================================================

        this._game.world.addChild(this);
    }

    update () {
        this.body.velocity.x = 0;

        //============================================================
        // move sprite to the pointer's current X coordinate
        this.game.physics.arcade.moveToXY(this, this._game.input.x, this._y, 60, 75);
        //============================================================


        //============================================================
        // Uncomment this section to use cursor key movement
        /*if (this.cursors.left.isDown) {
            this.body.velocity.x = -1000;
        } else if (this.cursors.right.isDown) {
            this.body.velocity.x = 1000;
        } else {
            this.body.velocity.x = 0;
        }*/
        //============================================================
    }
}
export default Paddle;