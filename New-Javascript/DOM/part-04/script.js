let div = document.querySelector('div');
div.setAttribute('class','greenBg');

div.setAttribute('style','background-color:yellow');

div.style.cssText = 'background-color:red; font-size:20px; font-weight:bold';

div.classList.add('redBg');
console.log(div.className);
div.classList.add('greenBg');
div.classList.remove('greenBg');










