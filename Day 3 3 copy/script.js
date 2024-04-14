let canvas;
let posx = 10;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function drawTile(x, y, width, height){
    stroke("black");
    fill("white");
    rect(x, y, width, height)
    noStroke();
    fill("red")
    rect((x + width*0.375)-5, y, 5, height);
    rect((x + width*0.575)-5, y, 5, height);
    rect(x , (y + height*0.475)-5, width, 5);
    rect(x , (y + height*0.325)-5, width, 5);
     rect(x , (y + height*0.625)-5, width, 5);
     fill("cyan")
    rect(x , (y + height*0.295)-5, width, 5);
     rect(x , (y + height*0.695)-5, width, 5);
      rect((x + width*0.445)-5, y, 5, height);
       rect((x + width*0.545)-5, y, 5, height);
}

function createTile(x, y, w, h, cars) {
    let carPositions = [];
    for (let i = 0; i < cars; i++) {
        let carX = getRndInteger(x, x + w);
        let carY = getRndInteger(y, y + (h * 0.75));
        carPositions.push([carX, carY])
    }
    let tile = {
        posX: x,
        posY: y,
        width: w,
        height: h,
        cars: carPositions,
        render: function () {
            fill("yellow");
            rect(this.posX, this.posY, this.width, this.height);
            fill("brown");
            circle((x+w*0.25),(y+h*0.75),(h*0.25));
            rect(x + this.width * 0.35, y + this.height * 0.75, this.width * 0.24, this.height * 0.36);
            rect(x + this.width * 0.35, y + this.height * 0.75, this.width * 0.24, this.height * 0.36);
            rect(x + this.width * 0.35, y + this.height * 0.75, this.width * 0.24, this.height * 0.36);
            circle((x+w*0.75),(y+h*0.75),(h*0.25));
        }
    }

    return tile;
}


let tiles = [];
let tileDim = 100;


function setup() {
    canvas = createCanvas(1000, 1000);
    canvas.parent("c");

    background("white");


	let tileDim = 100
	for (let i = 0; i < 10; i++) {
    	for (let j = 0; j < 10; j++) {
    		let tile = createTile(i*tileDim, j*tileDim, tileDim, tileDim, 20)
    		tiles.push(tile);
    	}
    }
    
    for (tile of tiles){
    	tile.render();
    }
}

function draw() {
}