
let randomColorBtn = document.querySelector(".randomBtn");
let colorInput = document.querySelector("#colorInput");
let applyBtn = document.querySelector(".applyBtn");
let currentColorValue = document.querySelector(".currentColorValue");
let container = document.querySelector('.container');

const changeColor = (color)=>{
    container.style.backgroundColor = color;
    currentColorValue.innerText = color;
}

const colorArray = ['red','blue','green','yellow','Tomato','white','black'];

const handleRandomBtnClick = function(){
    let idx = Math.floor(Math.random()*colorArray.length);
    changeColor(colorArray[idx]);
}

const handleApplyBtnClick = function(){
    let colorVal = colorInput.value;
    changeColor(colorVal);
}


randomColorBtn.addEventListener('click',handleRandomBtnClick);
applyBtn.addEventListener('click',handleApplyBtnClick);


























