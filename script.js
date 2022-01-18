let divContainer = document.getElementById('container');
let cellArray = [];

let person = '';


for (i = 0; i <= 256; i++) { // this loop creates all of the cells for the grid and logs each in an array so they can be indexed later.
    window['cell'+i] = document.createElement('div');
    window['cell'+i].classList.add('cell');
    window['cell'+i].setAttribute('id', 'cell'+i);
    cellArray.push(window['cell'+i]);
}
console.log(cellArray);


for (i = 1; i <= 256; i++) { // this loop puts each new cell div into the container div to fit in the grid.
    let cellGeneral = cellArray[i];
    divContainer.appendChild(cellGeneral);
}
const cellHover = divContainer.querySelectorAll('.cell');



function divHover () { // changes the background of the cell once it is hovered over.
    cellHover.forEach(cell => cell.addEventListener('mouseover', function() {
        this.style.border = '2px solid black';
    }))
    cellHover.forEach(cell => cell.addEventListener('mouseout', function() {
        this.style.border = '';
    }))
    cellHover.forEach(cell => cell.addEventListener('click', function() {
        this.style.backgroundColor = 'black';
    }))
}


console.log(cellHover);

divHover();
 // runs the reseting of the page and runs the inputPrompt function.
    let resBut = document.querySelector('#reset');
    resBut.addEventListener('click', function() {
        cellHover.forEach(cell => cell.style.border = '')
        cellHover.forEach(cell => cell.style.backgroundColor = 'white')
        divHover();
       // person = prompt('Please enter a grid size smaller than 100.', 'ex: 32');
       // inputPrompt(person);
    });



/*
function inputPrompt(input) { // asks the user for input on how big the next grid should be.
    if (input == null) {
        alert('That was an invalid input. Please enter how large you would like each side of the grid.');
        person = prompt('Please enter how large you would like the sides of the grid.', 'ex: 32');
    } else if (input != null) {
        if (input < 101 && input > 0) {
            generateGrid(input);
        } else {
            alert('The input was invalid. Please enter a number of 1 or greater and less than 100.')
            person = prompt('Please enter how large you would like the sides of the grid.', 'ex: 32');
        }
    }
}

function generateGrid (amount) {
    alert('This feature is currently under development. Please enjoy with the standard 16x16 grid!');
}
*/

