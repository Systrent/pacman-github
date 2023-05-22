class Pacman {
    constructor(origin = { x: canvas.width / 2, y: canvas.height / 2 }, size = 40, color = '#ffd60a', maxSpeed = 10) {
        this.size = size;
        this.origin = { x: origin.x, y: origin.y };
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.mouthOpen = 40;
        this.speed = { x: maxSpeed, y: maxSpeed };
        this.beginning = true;
    }

    draw(ctx, delta) {
        let open = 20 * Math.sin(this.mouthOpen) + 20;
        let direction = 0;
        // Left
        if (this.speed.x != 0 && this.speed.x < 0 && !this.beginning) {
            direction = 180;
        }
        // Down
        if (this.speed.y != 0 && this.speed.y > 0 && !this.beginning) {
            direction = 90;
        }
        // Up
        if (this.speed.y != 0 && this.speed.y < 0 && !this.beginning) {
            direction = 270;
        }

        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.origin.x, this.origin.y);
        ctx.arc(this.origin.x, this.origin.y, this.size, converAngleToRad(open + direction), converAngleToRad(-open + direction));
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }

    update(delta) {
        this.mouthOpen += this.maxSpeed * delta;
        let newPosX = this.origin.x + this.speed.x * (delta + 0.03);
        let newPosY = this.origin.y + this.speed.y * (delta + 0.03);

        // Limits

        if (newPosY < canvas.height - this.size && newPosY >= 0 + this.size && !this.beginning) {
            this.origin.y = newPosY;
        }

        if (newPosX < canvas.width - this.size && newPosX >= 0 + this.size && !this.beginning) {
            this.origin.x = newPosX;
        }
    }

    keyboardEvent(key) {
        switch (key) {
            case 'ArrowLeft':
                this.speed.x = -this.maxSpeed;
                this.speed.y = 0;
                this.beginning = false;
                break;
            case 'ArrowRight':
                this.speed.x = this.maxSpeed;
                this.speed.y = 0;
                this.beginning = false;
                break;
            case 'ArrowUp':
                this.speed.y = -this.maxSpeed;
                this.speed.x = 0;
                this.beginning = false;
                break;
            case 'ArrowDown':
                this.speed.y = this.maxSpeed;
                this.speed.x = 0;
                this.beginning = false;
                break;
        }
    }
}

const converAngleToRad = (angle) => (angle * Math.PI) / 180;
