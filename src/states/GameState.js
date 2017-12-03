import Paddle from '../prefabs/Paddle';
import ArcadeScore from '../prefabs/ArcadeScore';
import ARCADE_SCORE_TOP from '../prefabs/ArcadeScore';
import Ball from '../prefabs/Ball';

class GameState extends Phaser.State {

    create () {
        this.debug = true;
        this.game.time.desiredFps = 30;
        this.game.time.fpsMax = 30;
        let center = { x: this.game.world.centerX, y: this.game.world.centerY };


        this.paddle = new Paddle(this.game, center.x, this.game.height - 29, "paddleRed");
        this.score = new ArcadeScore(this.game, ARCADE_SCORE_TOP);

        this.balls = this.game.add.group();
        this.ball = new Ball(this.game, center.x, center.y, "ballBlue");
        this.balls.add(this.ball);

        this.backstop = new Phaser.Graphics(this.game, 0, this.game.height - 2);
        this.backstop.drawRect(0, this.game.height - 2, this.game.width, 4);
        this.game.physics.arcade.enable(this.backstop);

        this.input.onDown.add(this.clickHandler, this);

    }

    clickHandler (){
        this.balls.forEach( (ball) => {
            if (!ball._isLaunched){
                ball.launch();
            }
        });
    }

    collisionHandler (object1, object2) {
        console.log(object1, object2);
        object2.destroy();

    }

    update () {
        this.score.update();

        this.balls.forEach( (ball) => {
            if (!ball._isLaunched){
                ball.body.y = this.paddle.y - 32;
                ball.body.x = this.paddle.x;
            }
        });

        this.game.physics.arcade.collide(this.paddle, this.balls);
        this.game.physics.arcade.collide(this.backstop, this.balls, this.collisionHandler, null, this);
    }

    render () {
        if(this.debug) {
            this.game.debug.text(this.game.time.suggestedFps, 2, 16);
            this.game.debug.text((this.game.input.x), 600, 16);
            //this.game.debug.bodyInfo(this.ball, 2, 128);
            this.game.debug.body(this.backstop);
        };
    }
}

export default GameState;
