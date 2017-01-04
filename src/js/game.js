import * as PIXI from "pixi.js";

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

    }

    tick() {
        this.renderer.render(this.root);
        requestAnimationFrame(this.tick.bind(this));
    }
}
