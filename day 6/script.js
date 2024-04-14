let blocksize= 25;
let rows=20;
let cols=20;
let board;
let context;

window.onload= function(){
    document.getElementById("board")
    board.height=rows* blocksize;
    board.with= cols*blocksize;
    context = board.getcontext("2d");
    Update();
}

function update(){
    context.fillstyle="black"
    context.fillRect(0,0,board.width,board.height);
    

}