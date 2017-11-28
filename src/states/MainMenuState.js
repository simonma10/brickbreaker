

class MainMenuState extends Phaser.State {
    create () {
        let bg = this.game.add.image(0,0,'deep-space');
        bg.width = this.game.width;
        bg.height = this.game.height;

        let btn = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 200,'buttonSpriteSheet', this.clickHandler, this, 2, 1, 0);
        btn.anchor.setTo(0.5);
        
    }

    render () {
        this.game.debug.text('main menu', 32, 32);
    }

    clickHandler(){
        this.state.start('GameState');
    }
}

export default MainMenuState;
