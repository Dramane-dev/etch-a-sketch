import * as variables from '../exports/variables.js';
import { colors, min, max } from '../exports/colors.js';

export function changeColor() {
    if (variables.multicolorsObj.isMulticolors) {
        this.style.backgroundColor = colors[Math.floor(Math.random() * (max - min) + min)];
    } else {
        this.style.backgroundColor = 'black';
    }
}