let canvas;
let speed = 50;
let bullets = [];
let asteroids = [];
let asteroidIndex = 0;

class Rocket {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.render = function(){
            fill("red");
            rect(this.x, this.y, this.width, this.height);
        }
    }
}

class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.render = function(){
            fill("blue");
            circle(this.x, this.y, 10);
        }

        this.update = function(){
            this.y -= 5;
            if (this.y < 0){
                bullets.shift();
            }
        }
    }
}

class Asteroid {
    constructor(x, y, index){
        this.x = x;
        this.y = y;
        this.index = index;

        this.render = function(){
            fill("green")
            circle(this.x, this.y, 30);
        }

        this.update = function(){
            this.y += 5;
            if (this.y > 1000){
                asteroids.shift();
            }
        }

        this.hit = function(bullet){
            if (dist(this.x, this.y, bullet.x, bullet.y) < 10){
                asteroids.splice(asteroids.indexOf(this), 1);
            }
        }
    }
}



let sprite = new Rocket(1000/2, 1000*0.7, 50, 50);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function setup() {
    canvas = createCanvas(1000, 1000);
    canvas.parent("c");
    background("white");
    rectMode(CENTER);
}

function draw() {
    background("white");
    if(sprite){
        sprite.render();
    }

    if(bullets.length > 0){
        for (i of bullets){
            i.render();
            i.update();
        }
    }

    if(frameCount%30 == 0){
        let asteroid = new Asteroid(getRndInteger(0, width), 0, asteroidIndex);
        asteroidIndex += 1;
        asteroids.push(asteroid);
    }

    if(asteroids.length > 0){
        for (i of asteroids){
            i.render();
            i.update();
            for (j of bullets){
                i.hit(j);
            }
        }
    }
    
}


function keyTyped() {
    if (key === 'a') {
      sprite.x -= speed;
    } else if (key === 'd') {
        sprite.x += speed;
    }
}

function mousePressed() {
    let bullet = new Bullet(sprite.x, sprite.y);
    bullets.push(bullet);
}