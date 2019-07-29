const canvas = document.getElementById("jsCanvas"),
    ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 700;

let painting = false;

function stopPainting(){
    painting = false;
}

function mouseMove(event){
    let x = event.offsetX;
    let y = event.offsetY;

    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else{
        ctx.lineTo(x, y);
        ctx.stroke();
        console.log(ctx.moveTo);
    }
    console.log(x, y);
}

function mouseDown(event){
    painting = true;
}

function init(){
    canvas.addEventListener("mousemove", mouseMove);
    canvas.addEventListener("mousedown", mouseDown);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

init();