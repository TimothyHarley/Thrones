import {characterDatas} from './details.js';
import {printToDom} from '../helpers/util.js';
import {detailsBuilder} from './details.js';

const createEvents = () => {
    const characterCards = documnet.getElementsByClassName('character-card');
    for(let i=0; i<characterCards.length; i++){
        characterCards[i].addEventListener('click', characterClick);
    }
};

const sortPeople = (e) => {
    const house = e.target.id
    if(house === 'ALL'){
        charactersBuilder(characters)
    } else {
    const filterPeeps = characters.filter(x => x.house === house);
    charactersBuilder(filterPeeps);
    }

};

const sortEvents = () => {
    const addEventListener 
}


const charactersBuilder = () => {
    let domString = '';
    characterDatas.forEach((character) => {
        domString += `<div class="card col-3 mr-1 characterCard" id='${character.id}'>`
        domString +=  `<img class="card-img-top" src="${character.imageUrl}" alt="${character.name}">`
        domString +=  `<div class="card-body">`
        domString +=    `<h5 class="card-title">${character.name}</h5>`
        domString +=  `</div>`
        domString += `</div>`
    });
    printToDom(domString, 'printDiv');
    createEvents();
}


const createEvents = () => {
    const characterCards = document.getElementsByClassName('characterCard');
    for(let i=0; i<characterCards.length; i++){
        // characterCards[i].addEventListener('click', characterCards);  This should work as an alt to the line below...
        characterCards[i].addEventListener('click', (e) => {
            characterClick(e);
        })
    }
}

const characterClick = (e) => {
    // console.log(e.target);  testing functions
    // console.log(e.target.closest('.characterCard').id); testing functions
    const characterId = e.target.closest('.characterCard').id
    const currentCharacter = characterDatas.find(x => x.id === characterId); //Im not entirely sure what's happening here
    detailsBuilder(currentCharacter);
}


export {charactersBuilder}