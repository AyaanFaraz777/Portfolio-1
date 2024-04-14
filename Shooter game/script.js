let canvas;
let bullets = [];
let enemies = [];
let score = 0;
let enemy;
function setup() {
    canvas = createCanvas(1000, 1000)
    for (let i = 0; i < 5; i++) {
        let enemy = {
            x: random(0, width),
            y: random(-800, 0)
        }
        enemies.push(enemy)
    }
}

function draw() {
    background("cyan")
    rectMode(CENTER)
    circle(mouseX, height - 50, 60)
    for (let bullet of bullets) {
        circle(bullet.x, bullet.y, 25)
        bullet.y -= 5
    }
    for (let enemy of enemies) {
        enemy.y += 2
        rect(enemy.x, enemy.y, 30)
    
    if (enemy.y>height){
        textSize(20)
        text("You Loose!",width/2,height/2)
        noLoop()
    }
  }
    for (let enemy of enemies) {
        for (let bullet of bullets) {
            if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10) {
                enemies.splice(enemies.indexOf(enemy), 1)
                bullets.splice(bullets.indexOf(bullet), 1)
                let newEnemy = {
                    x: random(0, width),
                    y: random(-800, 0)
                }
                enemies.push(newEnemy)
                score += 1
            }
        }
    }
    text(score,25,25)
    textSize(16)
}

function mousePressed() {
    fill("#82B26C")
    let bullet = {
        x: mouseX,
        y: height - 50
    }
    bullets.push(bullet)
}