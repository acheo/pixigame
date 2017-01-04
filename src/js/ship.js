module.exports = class Ship{
    constructor( game, x, y ) {
        this.speed = 400;
        this.target = {
            x: 0, y: 0
        };
        this.last = Date.now();

        this._game = game;
        this._body = PIXI.Sprite.fromImage( '../img/ship-white.png' );
        this._body.position.x = x;
        this._body.position.y = y;
        this.target.x = x;
        this.target.y = y;
        this._body.scale.x = this._body.scale.y = 1;
        this._body.anchor.x = this._body.anchor.y = 0.5;
        this._game.root.addChild( this._body );
    }

    update(){
        let now = Date.now();
        // number of seconds since the last update
        let elapsed = (now - this.last) * 0.001;

        this.last = now;

        let dx = this.target.x - this._body.position.x;
        let dy = this.target.y - this._body.position.y;
        let dist = Math.sqrt(dx*dx+dy*dy);

        var angleR = Math.atan2(dy, dx); // radians

        let movement = this.speed * elapsed;
        if (movement > dist) {
            this._body.position.x = this.target.x;
            this._body.position.y = this.target.y;
        } else {
            let nx = (dx / dist) * movement;
            let ny = (dy / dist) * movement;
            this._body.position.x += nx;
            this._body.position.y += ny;
            this._body.rotation = angleR + (90/360*(2*Math.PI));
        }



    }
}