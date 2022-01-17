let divContainer = document.getElementsByClassName('container');


let k = 'cell';
let i = 0;

for (i = 0; i <= 256; i++) {
    eval('let ' + k + i + '= ' + "''" + ';');
}

console.log(cell1, cell256);


