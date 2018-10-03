import {charactersBuilder} from '../components/characters.js';
import {setCharacters, getCharacterz} from '../components/details.js';

function executeThisCodeAfterFileLoaded () {
    
    const data = JSON.parse(this.responseText);
    setCharacters(data.characters);
    charactersBuilder(getCharacterz());
}

function executeThisCodeIfXhrFails () {
    console.log('shit broke');
}


//This block of code can be copied and pasted (with minor changes) anytime it's needed.  No need to memorize.
const getCharacters = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/characters.json');
    myRequest.send();
};

export {getCharacters};