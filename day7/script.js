let canvas;
let radius=6
function setup(){
canvas = createCanvas(1000,1000);
canvas.parent("c");
}
function draw(){

}
function checkGreatness(a,b){
if(a>b){
console.log("a is greater")
    }
else if(b>a){
console.log("b is greater")
}
else {
console.log("a and b are equal")
}
}
function areaCircle(){
  let area=Math.PI*(radius*radius)
  console.log(area)   
}
areaCircle(12)
checkGreatness(10,10)
checkGreatness(10,100)
checkGreatness(100,10)   