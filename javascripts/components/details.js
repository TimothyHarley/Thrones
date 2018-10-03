import { printToDom } from "../helpers/util.js";

const characterDatas = [
    {id:'character1', 
    name: 'Jon Snow', 
    house: 'Stark', 
    imageUrl: 'SoIaF.jpg'},
    {id:'character2', 
    name: 'Tony Stark', 
    house: 'Stark', 
    imageUrl: 'SoIaF.jpg'},
    {id:'character3', 
    name: 'Cersei Lannister', 
    house: 'Lannister', 
    imageUrl: 'SoIaF.jpg'},
    {id:'character4', 
    name: 'Rhaegar Targarian', 
    house: 'Targarian', 
    imageUrl: 'SoIaF.jpg'},
    {id:'character5', 
    name: 'Tyrion Lannister', 
    house: 'Lannister', 
    imageUrl: 'SoIaF.jpg'},

];

//event listener for close button
const close.addEventListener =

const detailsBuilder = (character) => {
    console.log('character inside details', character)
    let domString = ''; //personal preference.  must experiment to see why
    domString += `<div class="col-6 offset-md-3">`
    domString +=   `<div class="row"`
    domString +=     `<button class="btn btn-danger" id="close">x</button>`
    domString +=   `</div>`
    domString +=   `<div class="row">`
    domString +=     `<div class="col">`
    domString +=       `<img src="${character.imageUrl}" alt="${character.name}"`
    domString +=     `</div>`
    domString +=     `<div class="col">`
    domString +=       `<h1>${character.name}</h1>`
    domString +=       `<h2>${character.house}</h2>`
    domString +=     `</div>`
    domString +=   `</div>`
    domString += `</div>`
    printToDom(domString, 'printDiv');
    closeButtonEvent();
}

export {characterDatas, detailsBuilder}

