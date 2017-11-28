import BootState from './states/BootState';
import PreloadState from './states/PreloadState';
import GameState from './states/GameState';
import MainMenuState from './states/MainMenuState';


class Game extends Phaser.Game {
    constructor (debug = true) {
        super(500, 500, Phaser.AUTO, 'content', null);
        this.debug = debug;

        this.state.add('BootState', BootState, false);
        this.state.add('PreloadState', PreloadState, false);
        this.state.add('MainMenuState', MainMenuState, false);
        this.state.add('GameState', GameState, false);

        this.state.start('BootState');
    }
}

new Game();
