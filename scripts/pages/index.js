/**
 * 
 * @returns {Photographer} recupere les données de l'utilisateur dans le json
 */

async function getPhotographers() {
    try{
        const response = await fetch('../data/photographers.json')
        const data = await response.json()
        return ({
            photographers: [...data.photographers]
        })
    }catch{
        console.log('error')
    }
}

/**
 * 
 * @param {*} photographers 
 */

function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

/**
 * affiche les données de l'utilisateur
 */

async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();

import { photographerFactory} from "../factories/photographer.js";