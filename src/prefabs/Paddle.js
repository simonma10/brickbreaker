class Paddle extends Phaser.Sprite {

    constructor (game, x, y, key){
        super(game, x, y, key);
        this.game = game;
        this.inputEnabled = true;
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.game.world.addChild(this);

        this.cursors = this.game.input.keyboard.createCursorKeys();

    }

    update () {
        if (this.cursors.left.isDown) {
            this.body.velocity.x = -1000;
        } else if (this.cursors.right.isDown) {
            this.body.velocity.x = 1000;
        } else {
            this.body.velocity.x = 0;
        }
    }

}

export default Paddle;