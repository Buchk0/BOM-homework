let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
function addMessage(message) {
    let listItem = document.createElement('li');
    listItem.textContent = message;
    list.appendChild(listItem);
}
btn.addEventListener('click', () => {
addMessage('I was pressed');
})

btn.addEventListener('mouseover', () => {
    addMessage('Mouse on me!')
})

btn.addEventListener('mouseout', () => {
    addMessage('Mouse is not on me!')
})