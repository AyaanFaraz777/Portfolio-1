let canvas;
let posx = 10; 


function drawTile(x, y, width, height){
function drawTile(x, y, width, height){
    stroke("black");
    fill("white");
    rect(x, y, width, height)
    noStroke();
    fill("red")
    rect((x + width*0.595)-5, y, 5, height);
    rect((x + width*0.625)-5, y, 5, height);
    rect(x , (y + height*0.725)-5, width, 5);
    rect(x , (y + height*0.430)-5, width, 5);
     rect(x , (y + height*0.630)-5, width, 5);
     fill("cyan")
    rect(x , (y + height*0.700)-5, width, 5);
     rect(x , (y + height*0.685)-5, width, 5);
      rect((x + width*0.450)-5, y, 5, height);
       rect((x + width*0.550)-5, y, 5, height);
     
     
}     
}

function setup(){
    canvas = createCanvas(1000, 1000);
    canvas.parent("c");
}

let tileW = 400;
let tileH = tileW;

function draw(){
    for (let i = 0; i < 500; i++){
        for (let j = 0; j < 10; j++){
            drawTile(i*tileW, j*tileH, tileW, tileH);
        }
    }
}