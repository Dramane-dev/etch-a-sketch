import * as variables from '../exports/variables.js';
import { changeColor } from './changeColor.js';

export function createDiv(rows, columns) {
    let gridWidth = variables.container.offsetWidth / rows;
    variables.container.style.gridTemplateColumns = `repeat(${columns - 3}, ${gridWidth}px) 1fr 1fr 1fr`;
    variables.container.style.gridTemplateRows = `repeat(${rows - 3}, ${gridWidth}px) 1fr 1fr 1fr`;

    if (rows < 4) {
        variables.container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        variables.container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    }
    
    for (let i = 0; i < (rows * columns); i++) {
        let div = document.createElement('div');
        variables.container.appendChild(div);
    }
    let divs = variables.container.querySelectorAll('div');
    divs.forEach(div => div.addEventListener('mouseover', changeColor));
}