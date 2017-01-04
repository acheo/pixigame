import * as PIXI from "pixi.js";

const Ship = require( './ship' );

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
            //console.log(e);
            game.myship.move(e.data.global.x,e.data.global.y);
        }

        root.interactive = true;
        root.buttonMode = true;
        //root.on("mousedown", mouseEventHandler);
        //root.on("mouseup", mouseUpEventHandler);
        //root.on("mouseover", mouseEventHandler);
        root.on("mousemove", mouseMoveEventHandler);

        this.myship = new Ship( this, window.innerWidth / 2, window.innerHeight / 2);

    }

    tick() {
        this.renderer.render(this.root);
        requestAnimationFrame(this.tick.bind(this));
    }
}
