let canvas;
let w= 600
let h= 600
function setup(){
    canvas = createCanvas(w,h);
    background(2000);
    canvas.parent("c");
}

function draw(){
let r=random(100)
console.log(r)
rect(mouseX,mouseY,r)

}