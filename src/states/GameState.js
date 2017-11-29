import RainbowText from '../prefabs/RainbowText';

class GameState extends Phaser.State {
    create () {
        let center = { x: this.game.world.centerX, y: this.game.world.centerY }
        let text = new RainbowText(this.game, center.x, center.y, '- phaser -\nwith a sprinkle of\nES6 dust!', {font: '48px "Droid Sans"'});
        text.anchor.set(0.5);
    }

    render () {
        if(this.debug) { this.game.debug.text('debug text', 32, 32)};
    }
}

export default GameState;
