import * as variables from '../exports/variables.js';

export function setGridSize(size) {
    variables.container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    variables.container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}