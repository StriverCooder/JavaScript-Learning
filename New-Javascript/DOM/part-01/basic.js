console.log("hello js");


let a = document.querySelector("h1");
console.log(a);
a.innerHTML = "Hi beta ji";
a.style.backgroundColor = "blue";
a.addEventListener('click',()=>{
    a.style.backgroundColor="yellow";
})

let p = document.querySelector("p");
console.log(p);

p.innerHTML = "Mitra tum bakchode ho.";
p.style.backgroundColor="green";

let btn1 = document.querySelector(".onBtn");
btn1.addEventListener("click",()=>{
    p.style.backgroundColor = "yellow";
    p.style.scale = "1";
});

let btn2 = document.querySelector(".offBtn");
btn2.addEventListener("click",()=>{
    p.style.backgroundColor = "magenta";
    p.style.scale = "0.5";
});












