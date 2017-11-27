class PreloadState extends Phaser.State {

    constructor () {
        super();
        this.background = null;
        this.preloadBar = null;

        this.ready = false;
    }
    preload () {
        //	These are the assets we loaded in Boot.js
        //	A nice sparkly background and a loading progress bar

        //this.background = this.add.sprite(0, 0, 'preloaderBackground');
        this.preloadBar = this.add.sprite(50, 400, 'preloaderBar');

        //	This sets the preloadBar sprite as a loader sprite.
        //	What that does is automatically crop the sprite from 0 to full-width
        //	as the files below are loaded in.

        this.load.setPreloadSprite(this.preloadBar);

        //	Here we load the rest of the assets our game needs.
        //	You can find all of these assets in the Phaser Examples repository

        this.game.load.image('tetris1', 'static/images/tetrisblock1.png');
        this.load.image('tetris2', 'static/images/tetrisblock2.png');
        this.load.image('tetris3', 'static/images/tetrisblock3.png');
        this.load.image('hotdog', 'static/images/hotdog.png');
        this.load.image('starfield', 'static/images/deep-space.jpg');
        this.load.image('dnd', 'static/images/dndmap.png');

    }

    create () {
        this.state.start('GameState');
    }
    render () {
        this.game.debug.text('preload state', 32, 32);
    }

}

export default PreloadState;


/*
PreloadScene.prototype.preload = function () {
    //show percentage
   this.progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY-30, '0%', {fill: 'white'});
   this.progress.anchor.setTo(.5,.5);
   //show progress bar
   var progressBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'progressBar');
   progressBar.anchor.setTo(0.5, 0.5);
   this.game.load.setPreloadSprite(progressBar);
   this.game.load.onFileComplete.add(this.fileComplete, this);
};

PreloadScene.prototype.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {    this.progress.text = progress+"%";};

    */