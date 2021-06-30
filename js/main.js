import { initializeGrid } from './functions/initializeGrid.js';
import * as variables from './exports/variables.js';

window.addEventListener('load', initializeGrid);

variables.reset.addEventListener('click', () => {
    location.reload();
});

