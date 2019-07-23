const body = document.querySelector("body"),
    form = body.querySelector("id");

const out = document.querySelector(".js-out");

const paper = document.querySelector(".js-message");

const getMessage = document.querySelector(".js-getMessage")

function outMessage(){
    window.open("popup.html", "a", "width=400, height=300, left=100, top=50");

}

function inputMessage(evt){
    evt.preventDefault();
    console.log("inputMessage");
}

function init(){
    //out.addEventListener("click", outMessage);
    form.addEventListener("submit", inputMessage);
}

init();