import {helpers} from './helpers/util.js';
import {characters} from './components/characters.js';
import {details} from './components/details.js';

const initApp = () => {
    console.log('main.js is connected');
    helpers();
    characters();
    details();
}

initApp();