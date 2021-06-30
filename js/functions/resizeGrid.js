import * as variables from '../exports/variables.js';
import { createDiv } from './createDiv.js';

export function resize() {
    let divs = variables.container.querySelectorAll('div');
    divs.forEach(div => div.remove());
    createDiv(variables.progressBar.value, variables.progressBar.value);
}