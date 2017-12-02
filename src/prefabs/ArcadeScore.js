
export const ARCADE_SCORE_TOP = 'TOP';
export const ARCADE_SCORE_BOTTOM = 'BOTTOM';

class ArcadeScore {

    constructor (game, position = ARCADE_SCORE_TOP){
        this._game = game;

        this._position = position;
        this._font = "18px Orbitron";
        let yLabel = 0;
        let yScore = 0;
        if (this._position = ARCADE_SCORE_BOTTOM){
            yLabel = this._game.height - 24;
            yScore = this._game.height - 64;
        } else {
            yLabel = 32;
            yScore = 48;
        }

        this._player1Score = 0;
        this._player2Score = 0;

        this._player1Label = this._game.add.text(64, yLabel, "1UP", {font: this._font, fill: "#0f0"});
        this._player1Label.anchor.setTo(0.5);
        this._player1ScoreText = this._game.add.text(64, yScore, "0", {font: this._font, fill: "#fff"});

        this._player2Label = this._game.add.text(this._game.width - 96, yLabel, "2UP", {font: this._font, fill: "#00f"});
        this._player2Label.anchor.setTo(0.5);
        this._player2ScoreText = this._game.add.text(712, yScore, "00", {font: this._font, fill: "#fff"});

        this._hiscoreLabel = this._game.add.text(this._game.world.centerX, yLabel, "HIGH SCORE", {font: this._font, fill: "#f00"});
        this._hiscoreLabel.anchor.setTo(0.5);
        this._hiscoreScore = this._game.add.text(this._game.world.centerX, yScore, "120000", {font: this._font, fill: "#fff"});
        this._hiscoreScore.anchor.setTo(0.5, 0);



    }

    update () {
        this._player1ScoreText.text = this._player1Score.toString();
        this._player2ScoreText.text = this._player2Score.toString();
        this._player2ScoreText.x = this._game.width - (1.4 * this._player2ScoreText.width);
    }

}

export default ArcadeScore;