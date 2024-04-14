class dino {
    constructor() {
        this.r = 150
        this.x = 100;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 1.5 ;

        this.hits = (train) => {
            let x1 = this.x
            let y1 = this.y
            let x2 = train.x 
            let y2 = train.y 
            return collideCircleCircle(x1, y1, this.r, x2, y2, train.r);
        }

        this.jump = () => {
            if (this.y == height - this.r) {
                this.vy = -35;
            }
        }

        this.move = () => {
            this.y += this.vy;
            this.vy += this.gravity;
            this.y = constrain(this.y, 0, height - this.r);
        }
        this.show = () => {
            imageMode(CENTER);
            image(uImg, this.x, this.y, 75, 75);
        }
    }
}