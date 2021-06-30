import * as variables from '../exports/variables.js';

import { createDiv } from './createDiv.js';
import { setGridSize } from './setGridSize.js';
import { resize } from './resizeGrid.js';

export function initializeGrid() {
    createDiv(variables.rows, variables.columns);
    setGridSize(variables.rows);
    
    variables.progressBar.addEventListener('mouseup', resize);
}