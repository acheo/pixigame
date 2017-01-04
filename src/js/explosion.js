import * as particles from "pixi-particles";

module.exports = class Explosion{
    constructor( game, x, y ) {
        this._game = game;

        this.container = new PIXI.Container();

        this._game.root.addChild( this.container );

        // Create a new emitter
        let emitter = new PIXI.particles.Emitter(
            // The PIXI.Container to put the emitter in
            // if using blend modes, it's important to put this
            // on top of a bitmap, and not use the root stage Container
            this.container,

            // The collection of particle images to use
            [PIXI.Texture.fromImage('../img/particle.png'), PIXI.Texture.fromImage('../img/smokeparticle.png')],

            // Emitter configuration, edit this to change the look
            // of the emitter
            // http://pixijs.github.io/pixi-particles-editor/
            {
                "alpha": {
                    "start": 0.4,
                    "end": 0
                },
                "scale": {
                    "start": 2,
                    "end": 0.4,
                    "minimumScaleMultiplier": 1
                },
                "color": {
                    "start": "#eb4646",
                    "end": "#ffba24"
                },
                "speed": {
                    "start": 10,
                    "end": 10,
                    "minimumSpeedMultiplier": 1
                },
                "acceleration": {
                    "x": 0,
                    "y": 0
                },
                "maxSpeed": 0,
                "startRotation": {
                    "min": 0,
                    "max": 360
                },
                "noRotation": false,
                "rotationSpeed": {
                    "min": 0,
                    "max": 0
                },
                "lifetime": {
                    "min": 2,
                    "max": 1.8
                },
                "blendMode": "screen",
                "frequency": 0.005,
                "emitterLifetime": 1,
                "maxParticles": 200,
                "pos": {
                    "x": x,
                    "y": y
                },
                "addAtBack": true,
                "spawnType": "circle",
                "spawnCircle": {
                    "x": 0,
                    "y": 0,
                    "r": 150
                }
            }
        );

        // Calculate the current time
        var elapsed = Date.now();

        // Update function every frame
        const update = () => {

            // Update the next frame
            requestAnimationFrame(update);

            let now = Date.now();

            // The emitter requires the elapsed
            // number of seconds since the last update
            emitter.update((now - elapsed) * 0.001);
            elapsed = now;

            // Should re-render the PIXI Stage
            // renderer.render(stage);
        };

        // Start emitting
        emitter.emit = true;

        // Start the update
        update();
    }
}