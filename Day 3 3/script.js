let canvas;
let posx = 10;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function drawTile(x, y, width, height) {
    stroke("black");
    fill("white");
    rect(x, y, width, height)
    noStroke();
    fill("red")
    rect((x + width * 0.25) - 5, y, 10, height);
    rect((x + width * 0.75) - 5, y, 10, height);
    rect(x, (y + height * 0.25) - 5, width, 10);
    rect(x, (y + height * 0.75) - 5, width, 10);
}

function createTile(x, y, w, h, leaves) {
    let leavePositions = [];
    for (let i = 0; i < leaves; i++) {
        let leafX = getRndInteger(x, x + w);
        let leafY = getRndInteger(y, y + (h * 0.75));
        leavePositions.push([leafX, leafY])
    }
    let tile = {
        posX: x,
        posY: y,
        width: w,
        height: h,
        leaves: leavePositions,

        render: function () {
            fill("white");
            rect(this.posX, this.posY, this.width, this.height);
            fill("brown");
            rect(x + this.width * 0.4, y + this.height * 0.7, this.width * 0.2, this.height * 0.3);
            for (let i = 0; i < this.leaves.length; i++) {
                fill("green");
                circle(this.leaves[i][0], this.leaves[i][1], this.width * 0.1);
            }
        }
    }

    return tile;
}

//let tile1 = createTile(500, 500, 100, 100, 100);

// let object = {
//     posX: 100,
//     posY: 200,
//     radius: 50,
//     colors: ["yellow", "blue", "red"],
//     colorIndex: 0,

//     render: function() {
//         fill(this.colors[this.colorIndex])
//         circle(this.posX, this.posY, this.radius*2)
//     },
// }

let tiles = [];
let tileDim = 100
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log((10*i)+j)
        let tile = createTile(i * tileDim, j * tileDim, tileDim, tileDim, 250);
        tiles.push(tile);
    }
}

function setup() {
    canvas = createCanvas(1000, 1000);
    canvas.parent("c");

    background("white");


    
}

function draw() {
    noStroke();
    for (i of tiles) {
        i.render()
    }
}