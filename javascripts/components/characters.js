import {characterDatas} from './details.js';
import {printToDom} from '../helpers/util.js';
import {detailsBuilder} from './details.js';

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

const characterClick = (e) => {
    // console.log(e.target);
    // console.log(e.target.closest('.characterCard').id);
    const characterId = e.target.closest('.characterCard').id
    const currentCharacter = characterDatas.find(x => x.id === characterId);
    detailsBuilder(currentCharacter);
}

const createEvents = () => {
    const characterCards = document.getElementsByClassName('characterCard');
    for(let i=0; i<characterCards.length; i++){
        // characterCards[i].addEventListener('click', characterCards);
        characterCards[i].addEventListener('click', (e) => {
            characterClick(e);
        })
    }
}

export {charactersBuilder}