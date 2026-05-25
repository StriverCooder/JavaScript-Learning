let firstBtn = document.querySelector('.firstBtn');
console.log(firstBtn);

let h1 = document.querySelector('h1');

firstBtn.onclick = ()=>{
    h1.style.backgroundColor = 'red';
}

let body = document.querySelector('body');
console.log(body);

let fnc = ()=>{
    body.backgroundColor="magenta";
}

firstBtn.addEventListener('click',fnc(event));

firstBtn.removeEventListener('click',fnc);



