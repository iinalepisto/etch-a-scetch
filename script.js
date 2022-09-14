const size = 16;
let cdiv = document.querySelector('.container');
let isClicked = false;
let color = "black";

function createGrid(size){
    let divs = cdiv.querySelectorAll('div');
    divs.forEach(div => {
        div.remove();
    });
    cdiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    cdiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++){
        let div = document.createElement("div");
        div.addEventListener("mousemove", coloring);
        div.style.backgroundColor="white";
        cdiv.appendChild(div);
    }
}

function changeSize(size){
    if(size > 0 && size <= 100 ){
        createGrid(size);
    }
    else{
        alert("Size is not ok. Try something between 1 and 100")
    } 
}

function clearGrid(){
    let divs = cdiv.querySelectorAll('div');
    divs.forEach(div => {
        div.style.backgroundColor="white";
    });
}

function coloring(){
    if(isClicked){
        this.style.backgroundColor = color;
    }
}
function changeColor(col){
    color = col;
}

document.querySelector('.container').addEventListener("click", () =>{
    isClicked = !isClicked;
});

window.onload = (event) => {
    createGrid(size);
};