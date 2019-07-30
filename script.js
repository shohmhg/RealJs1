const canvas = document.getElementById("jsCanvas"),
    ctx = canvas.getContext('2d'),
    color = document.querySelector(".palettes"),
    brushSize = document.querySelector(".brushSize"),
    ModeButton = document.getElementById("fill"),
    saveButton = document.getElementById("save");

let fill = false;

const canvasSize = 700;
canvas.width = canvasSize;
canvas.height = canvasSize;

ctx.lineWidth = 2.5;
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';

let painting = false;

function changeMode(){
    if(fill === true){
        fill = false;
        console.log('fill is off');
        ModeButton.innerText = "Fill";
    }else{
        fill = true;
        console.log('fill is on');
        ModeButton.innerText = "Paint";
    }
}

function setLineWidth(event){
    ctx.lineWidth = event.target.value;
    console.log(event.target.value);
}

function setColor(obj){
    ctx.fillStyle = obj.target.style.backgroundColor;
    ctx.strokeStyle = obj.target.style.backgroundColor;
    console.log(obj.target.style.backgroundColor);
}

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
    if(!fill){
        painting = true;
    }if(fill){
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function rightClick(event){
    event.preventDefault();
}

function saveCanvas(event){
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = "AutoDesk.png";
    link.click();
    console.log(link);
}

function init(){
    canvas.addEventListener("mousemove", mouseMove);
    canvas.addEventListener("mousedown", mouseDown);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    color.addEventListener("mousedown", setColor);
    brushSize.addEventListener("input", setLineWidth);
    if(ModeButton){
       ModeButton.addEventListener("click", changeMode);
    }
    if(saveButton){
        saveButton.addEventListener("click", saveCanvas);
    }
    canvas.addEventListener("contextmenu", rightClick);   
}

init();