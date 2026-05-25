//question 1

let parent = document.querySelector('#parent');

let p = document.createElement('p');
p.innerHTML = "I did'nt love you";
p.style.backgroundColor = 'black';
p.style.color = 'green';

parent.append(p);

//question 2

let btn = document.createElement('button');
btn.innerHTML = "click me";

p.append(btn);

// chalenging questions

function changeTagName(oldNode , newTagName){
    if(!(oldNode instanceof Element)){
        console.log('valid node');
        return null;
    }
    let para = document.createElement('p');
    p.innerText = oldNode.innerText;
    oldNode.after(para);
}

changeTagName(parent,'p');




