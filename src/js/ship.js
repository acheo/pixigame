module.exports = class Ship{
    constructor( game, x, y ) {
        this._game = game;
        this._body = PIXI.Sprite.fromImage( '../img/ship-white.png' );
        this._body.position.x = x;
        this._body.position.y = y;
        this._body.scale.x = this._body.scale.y = 1;
        this._body.anchor.x = this._body.anchor.y = 0.5;
        this._game.root.addChild( this._body );
    }

    move (x , y) {
        this._body.position.x = x;
        this._body.position.y = y;
    }
}