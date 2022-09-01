import 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import scores from './components/printAll.js';
import addNew from './components/addNew.js';
import refresh from './components/refresh.js';

// PRINT ALL SCORES
scores();

// ADD NEW SCORE
document.querySelector('#submit').addEventListener('click', addNew);

// REFRESH THE LIST
document.querySelector('#refresh').addEventListener('click', refresh);
