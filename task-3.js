let blueB = document.querySelector('#bb');
let pinkB = document.querySelector('#pb');
let brownB = document.querySelector('#brb');
let yellowL = document.querySelector('#yl');
let body = document.querySelector('body');
blueB.addEventListener('click', () => body.style.backgroundColor = 'blue');
pinkB.addEventListener('dblclick', () => body.style.backgroundColor = 'pink');
brownB.addEventListener('mousedown', () => body.style.backgroundColor = 'brown');
brownB.addEventListener('mouseup', () => body.style.backgroundColor = 'white');
yellowL.addEventListener('mouseenter', () => body.style.backgroundColor = 'yellow')
yellowL.addEventListener('mouseleave', () => body.style.backgroundColor = 'white')