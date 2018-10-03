import {printToDom} from './helpers/util.js';
import {charactersBuilder} from './components/characters.js'
import {getCharacters} from './data/charactersData.js'
import {sortEvents} from './components/characters.js'

const initApp = () => {
    // charactersBuilder();
    getCharacters();
    sortEvents();
    
}

initApp();