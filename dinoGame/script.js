let canvas;
let uImg;
let tImg;
let bImg;
let Dino;
let trains = [];

function preload() {
    uImg = loadImage("dino.jpeg")
    tImg = loadImage("images.jpeg")
    bImg = loadImage("desert.jpg")
}

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("c");
    Dino = new dino();
    trains.push(new Train());
}

function draw() {
    imageMode(CORNER)
    image(bImg, 0, 0, width, height)
    Dino.show();  
    Dino.move();
    

    for (let t of trains){
        t.move();
        t.show();
        if (Dino.hits(t)) {
            console.log('game over');
            noLoop()
        }
    };

    if (trains[trains.length-1].x < width/2) {
        trains.push(new Train());
    };
}

function keyPressed(){
    console.log(key);
    if (key == " ") {
        Dino.jump(trains);
    }
}
