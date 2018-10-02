import {characterDatas} from './details.js';
import {printToDom} from '../helpers/util.js';


const charactersBuilder = () => {
    let domString = '';
    characterDatas.forEach((character) => {
        domString += `<h1>${character.name}</h1>`;
    });
    printToDom(domString, 'printDiv');
}

export {charactersBuilder}