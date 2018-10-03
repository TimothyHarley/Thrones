import {characterDatas} from './details.js';
import {printToDom} from '../helpers/util.js';
import {detailsBuilder} from './details.js';


const sortPeople = (e) => {
    const house = e.target.id;
    if(house === 'All'){
        charactersBuilder(characterDatas);
    } else {
    const filterPeeps = characterDatas.filter(x => x.house === house);
    charactersBuilder(filterPeeps);
    }
};

const sortEvents = () => {
    const allButton = document.getElementById('All');
    const starkButton = document.getElementById('Stark');
    const lannButton = document.getElementById('Lannister');
    const targButton = document.getElementById('Targaryan');
    allButton.addEventListener('click', sortPeople);
    starkButton.addEventListener('click', sortPeople);
    lannButton.addEventListener('click', sortPeople);
    targButton.addEventListener('click', sortPeople);
};

const charactersBuilder = (characterArray) => {
    let domString = '';
    characterArray.forEach((character) => {
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


export {charactersBuilder, sortEvents}