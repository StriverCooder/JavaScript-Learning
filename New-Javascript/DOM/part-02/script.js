// console.log("hello");

// console.log(document);
// console.dir(document);

// let a = document.querySelectorAll('div');

// console.log(a);

// // let b = document.getElementsByTagName(h1);
// // console.log(b);

// let c = document.getElementById("heading");
// console.log(c);

// let d = document.getElementsByClassName("parent");
// console.log(d);

// Manipulating the Html

// let a = document.querySelector('h1');
// console.log(a.tagName);
// console.log(a.nodeName);
// console.log(a.firstChild);

// a.innerText = "  Babe tere Nani  \n   Ko More Le Gya";
// console.log(a.innerText);
// console.log(a.textContent);

// console.log(a.innerHTML);

// inserting element
let a = document.querySelector('div');
console.log(a);

let pEle = document.createElement('p');
console.log(pEle);
pEle.innerHTML = "para4";

a.append(pEle);

let ele = document.createElement('p');
ele.innerHTML = "para0";

a.prepend(ele);

let ele1 = document.createElement('p');
ele1.innerHTML = "para-1";

a.before(ele1);

let ele2 = document.createElement('p');
ele2.innerHTML = "para-last";

a.after(ele2);

let ele3 = document.createElement('p');
ele3.innerHTML = "para-new";

// a.insertAdjacentElement("beforebegin",ele3);
// a.insertAdjacentElement("afterbegin",ele3);
// a.insertAdjacentElement("beforeend",ele3);
a.insertAdjacentElement("beforebegin",ele3);

let p = a.children[3];
p.remove();

let p2 = document.querySelector('#para2');
console.log(p2);

let parent = p2.parentNode;
console.log(parent);


let ele4 = document.createElement('p');
ele4.innerHTML = "para-child";

parent.appendChild(ele4);

let newEle = document.createElement('div');
newEle.innerHTML = "Hello";

parent.replaceChild(newEle,ele4);

let div = document.querySelector('.box');
div.getAttribute('class');











