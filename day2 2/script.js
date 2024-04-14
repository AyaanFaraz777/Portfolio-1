let canvas;
let posx = 10; 


function drawTile(x, y, width, height){
    stroke("black");
    fill("white");
    rect(x, y, width, height)
    noStroke();
    fill("red")
    rect((x + width*0.25)-5, y, 10, height);
    rect((x + width*0.75)-5, y, 10, height);
    rect(x , (y + height*0.25)-5, width, 10);
    rect(x , (y + height*0.75)-5, width, 10);
}

function setup(){
    canvas = createCanvas(1000, 1000);
    canvas.parent("c");
}

let tileW = 100;
let tileH = tileW;

function draw(){
    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            drawTile(i*tileW, j*tileH, tileW, tileH);
        }
    }
}