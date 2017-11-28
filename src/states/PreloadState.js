class PreloadState extends Phaser.State {

    constructor () {
        super();
        this.background = null;
        this.preloadBar = null;

        this.ready = false;
    }
    preload () {
        this.background = this.add.sprite(0, 0, 'preloaderBackground');
        this.preloadBar = this.add.sprite(50, 400, 'preloaderBar');

        this.load.setPreloadSprite(this.preloadBar);

        this.game.load.image('tetris1', 'static/images/tetrisblock1.png');
        this.load.image('tetris2', 'static/images/tetrisblock2.png');
        this.load.image('tetris3', 'static/images/tetrisblock3.png');
        this.load.image('hotdog', 'static/images/hotdog.png');
        this.load.image('starfield', 'static/images/deep-space.jpg');
        this.load.image('dnd', 'static/images/dndmap.png');
        this.load.image('black128px', 'static/images/black128px.png');
        this.load.image('blue64px', 'static/images/blue64px.png');
        this.load.image('cross64', 'static/images/cross64.png');
        this.load.image('green64px', 'static/images/green64px.png');
        this.load.image('orange64px', 'static/images/orange64px.png');
        this.load.image('rectangles', 'static/images/rectangles.png');
        this.load.image('red64px', 'static/images/red64px.png');
        this.load.image('redCircle96', 'static/images/redCircle96.png');
        this.load.image('redStar96', 'static/images/redStar96.png');
        this.load.image('white640', 'static/images/white640x640.png');
        this.load.image('tick64', 'static/images/tick64.png');
        this.load.image('yellow64px', 'static/images/yellow64px.png');

        let manifest = this.game.cache.getJSON('manifest');

        if (manifest){
            for(let image of manifest.images) {
                if(image.hasOwnProperty('key') && image.hasOwnProperty('path')){
                    let imageKey = image.key;
                    let imagePath = image.path;
                    this.load.image(imageKey, imagePath);
                }
            }

            for(let spritesheet of manifest.spritesheets) {
                if(spritesheet.hasOwnProperty('key') &&
                    spritesheet.hasOwnProperty('path') &&
                    spritesheet.hasOwnProperty('frameWidth') &&
                    spritesheet.hasOwnProperty('frameHeight') &&
                    spritesheet.hasOwnProperty('frameMax')
                ){
                    this.load.spritesheet(
                        spritesheet.key,
                        spritesheet.path,
                        spritesheet.frameWidth,
                        spritesheet.frameHeight,
                        spritesheet.frameMax
                    );
                }
            }
        }



    }

    create () {
        this.state.start('GameState');
    }
    render () {
        if (this.debug) {this.game.debug.text('preload state ' + this.load.progress, 32, 32)};
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