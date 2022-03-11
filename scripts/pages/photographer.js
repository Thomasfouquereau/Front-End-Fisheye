import { photographerFactory } from "../factories/photographer.js";
import { mediaFactory } from "../factories/photographer.js";
import { closeModal, displayModal } from "../utils/contactForm.js";

document.getElementById("contactButton").addEventListener("click", displayModal)
document.getElementById("closeModal").addEventListener("click", closeModal)

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

async function getMediaInfo(userId) {
    try {
        const response = await fetch('/data/photographers.json');
        const data = await response.json();
        const filterMedia = data.media.filter(function (media) {
            return media.photographerId === userId;
        });
        return filterMedia[0]
    } catch {
        console.log('error')
    }
}


function displayData(photographer) {
    const photographersInfo = document.querySelector(".info");
    const photographersImg = document.querySelector(".photograph-img");
    const photographerModel = photographerFactory(photographer);
    const userInfoDOM = photographerModel.getUserInfoDOM();
    const userImgDOM = photographerModel.getUserImgDOM();
    photographersInfo.appendChild(userInfoDOM);
    photographersImg.appendChild(userImgDOM);
}

function displayMedia(media) {
    const mediaModel = mediaFactory(media);
    const mediaContent = document.querySelector(".content");
    const usermediaDOM = mediaModel.getUserMediaDOM();
    mediaContent.appendChild(usermediaDOM);
}

async function initInfo() {
    try {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        const photographerId = Number(params.get("id"));
        const selectedPhotographer = await getPhotographerInfo(photographerId);
        displayData(selectedPhotographer);
        const selectedMedia = await getMediaInfo(photographerId);//forEach
        const firstName = selectedPhotographer.name.split(" ")[0];
        selectedMedia.src =  `assets/images/${firstName}/${selectedMedia.image || selectedMedia.video}`;
        displayMedia(selectedMedia); 
    } catch (error) {
        alert(error.message);
    }
}


initInfo();