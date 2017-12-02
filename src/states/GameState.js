import Paddle from '../prefabs/Paddle';
import ArcadeScore from '../prefabs/ArcadeScore';

class GameState extends Phaser.State {

    create () {
        this.debug = true;
        this.game.time.desiredFps = 30;
        let center = { x: this.game.world.centerX, y: this.game.world.centerY };

        this.paddle = new Paddle(this.game, center.x, this.game.height - 29, "paddleRed");
        this.score = new ArcadeScore(this.game);



    }

    update () {
        this.score._player2Score += this.game.time.suggestedFps;
        this.score.update();




    }

    render () {
        if(this.debug) {
            this.game.debug.text(this.paddle.body.velocity.x, 2, 32);
            this.game.debug.text(this.game.time.suggestedFps, 2, 16);
            this.game.debug.text(this.score._player2Score, 2, 48);
            this.game.debug.text(this.score._player2ScoreText.x, 2, 64);
        };
    }
}

export default GameState;
