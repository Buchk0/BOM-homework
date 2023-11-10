let dropDown = document.querySelector('#dropdown');
let delBtn = document.querySelector('#deleteButton');
delBtn.addEventListener('click', () => {
    let selectedOption = dropDown.options[dropDown.selectedIndex];
    if(selectedOption) {
        dropDown.removeChild(selectedOption);
    }
});