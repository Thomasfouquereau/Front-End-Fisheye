async function getPhotographers() {
    try{
        const response = await fetch('/data/photographers.json')
        const data = await response.json()
        return ({
            photographers: [...data.photographers]
        })
    }catch{
        console.log('error')
    }
}

function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();