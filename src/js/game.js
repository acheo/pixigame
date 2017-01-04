import * as PIXI from "pixi.js";

const Ship = require( './ship' );
const Explosion = require( './explosion' );

document.addEventListener("DOMContentLoaded", () => {
    let game = new Game();
    window.game = game; // global
    game.tick();
});

class Game {
    constructor() {
        this.renderer = PIXI.autoDetectRenderer(
            window.innerWidth,
            window.innerHeight,
            {transparent: true},
            false
        );

        this.renderer.view.id = "pixicanvas"; // for css
        document.body.appendChild(this.renderer.view);
        let root = this.root = new PIXI.Container();

        root.hitArea = new PIXI.Rectangle(0, 0, window.innerWidth, window.innerHeight);

        var mouseMoveEventHandler = function(e){
            game.myship.target.x = e.data.global.x;
            game.myship.target.y = e.data.global.y;
        }

        var mouseUpEventHandler = function(e){
            let newExplosion = new Explosion( game, game.myship._body.position.x, game.myship._body.position.y);
        }

        var mouseDownEventHandler = function(e){

        }

        root.interactive = true;
        root.buttonMode = true;
        root.on("mousedown", mouseDownEventHandler);
        root.on("mouseup", mouseUpEventHandler);
        //root.on("mouseover", mouseEventHandler);
        root.on("mousemove", mouseMoveEventHandler);

        this.myship = new Ship( this, window.innerWidth / 2, window.innerHeight / 2);

    }

    tick() {
        this.renderer.render(this.root);
        this.myship.update();
        requestAnimationFrame(this.tick.bind(this));
    }
}
