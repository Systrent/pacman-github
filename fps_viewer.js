class FPSViewer {
    constructor(origin = { x: 10, y: 20 }) {
        this.origin = { x: origin.x, y: origin.y };
    }

    draw(ctx, delta) {
        const fps = (1 / delta).toFixed(0);

        ctx.font = '18px Consolas';
        ctx.fillStyle = '#000';
        ctx.fillText(`FPS: ${fps}`, this.origin.x, this.origin.y);
    }

    keyboardEvent() {}
    update(delta) {}
}
