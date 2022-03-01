async function getPhotographerInfo(userId) {
    try {
        const response = await fetch('/data/photographers.json');
        const data = await response.json();
        const filterPhotographer = data.photographers.filter(function (photographer) {
            return photographer.id === userId;
        });
        return filterPhotographer[0]
    } catch {
        console.log('error')
    }
}

//async function getmediaInfo() {
//    try {
//        const response = await fetch('/data/photographers.json');
//        const data = await response.json();
//        return ({
//            photographers: [...data.media]
//        })
//    } catch {//
//        console.log('error')
//    }
//}
//image non fonctionnel voir pq????
//et like avec incrémentation +1 et voir le svg like 

function displayData(photographer) {
    const photographersInfo = document.querySelector(".info");
    const photographersImg = document.querySelector(".photograph-img");
    const mediaContent = document.querySelector(".content");
     //photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userInfoDOM = photographerModel.getUserInfoDOM();
    const userImgDOM = photographerModel.getUserImgDOM();
    const usermediaDOM = photographerModel.getUserMediaDOM();
    mediaContent.appendChild(usermediaDOM);
    photographersInfo.appendChild(userInfoDOM);
    photographersImg.appendChild(userImgDOM);
    // });
}
//couper la fonction en deux ..media ..photographer

async function initInfo() {
    try {
        const url = new URL(window.location.href);//en voire plus sur url search prarams
        const params = new URLSearchParams(url.search);//--
        const photographerId = Number(params.get("id"));//--
        const selectedPhotographer = await getPhotographerInfo(photographerId);
        displayData(selectedPhotographer);
        console.log(url.searchParams.get("id"));
    } catch (error) {
        alert(error.message);
    }

    // const { media } = await getmediaInfo();
    // displayData(media)
}

initInfo();


import { photographerFactory } from "../factories/photographer.js";