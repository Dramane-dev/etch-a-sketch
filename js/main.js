import * as variables from './exports/variables.js';
import { initializeGrid } from './functions/initializeGrid.js';
import { multicolors } from './functions/multicolors.js';
import { resize } from './functions/resizeGrid.js';

window.addEventListener('load', initializeGrid);
variables.multicolors.addEventListener('click', () => {
    variables.multicolorsObj.isMulticolors = multicolors();
    resize();
});
variables.reset.addEventListener('click', () => {
    location.reload();
});

