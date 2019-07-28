const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting(){
    painting = false;
}

function mouseMove(event){
    console.log(event);
}

function mouseDown(event){
    painting = ture;
}

function mouseUp(){
    stopPainting();
}

function init(){
    canvas.addEventListener("mousemove", mouseMove);
    canvas.addEventListener("mousedown", mouseDown);
    canvas.addEventListener("mouseup", mouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}

init();