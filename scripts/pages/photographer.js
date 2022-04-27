import { photographerFactory } from "../factories/photographer.js";
import { mediaFactory } from "../factories/media.js";
import { closeModal, displayModal, closeKeyboard } from "../utils/contactForm.js";

document.getElementById("contactButton").addEventListener("click", displayModal)
document.getElementById("closeModal").addEventListener("click", closeModal)
document.getElementById("closeModal").addEventListener("keydown", closeKeyboard)

let mediaObjList = [];

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
        return filterMedia
    } catch {
        console.log('error')
    }
}

function displayData(photographer) {
    const photographersInfo = document.querySelector(".info");
    const photographersImg = document.querySelector(".photograph-img");
    const mediaInfo = document.querySelector(".infoPhotographerDisplay")
    const photographerModel = photographerFactory(photographer);
    const userInfoDOM = photographerModel.getUserInfoDOM();
    const userImgDOM = photographerModel.getUserImgDOM();
    const userpriceDOM = photographerModel.getUserPriceDOM();
    photographersInfo.appendChild(userInfoDOM);
    photographersImg.appendChild(userImgDOM);
    mediaInfo.appendChild(userpriceDOM)
}

function displayMedia(media) {
    const mediaContent = document.querySelector(".content");
    //const mediaInfo = document.querySelector(".infoPhotographerDisplay")
    //const nameForModal = document.querySelector(".nameModal")
    const usermediaDOM = media.getUserMediaDOM();
    // const userInfoDOM = mediaModel.getUserMediaInfoDOM();
    //const userNameModalDOM = media.getUserNameModalDOM();
    mediaContent.appendChild(usermediaDOM);
    // mediaInfo.appendChild(userInfoDOM)
    //nameForModal.appendChild(userNameModalDOM)
}

async function initInfo() {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const photographerId = Number(params.get("id"));
    const selectedPhotographer = await getPhotographerInfo(photographerId);
    if (selectedPhotographer === undefined) {
        document.body.innerHTML = "ERREUR"
        return
    }
    displayData(selectedPhotographer);
    const selectedMediaList = await getMediaInfo(photographerId);

    const triLikes = document.getElementById("nav-select")
    triLikes.addEventListener("change", function (e) {

        if (e.target.value === "Popularite") {
            mediaObjList.sort(function (a, b) {
                return b.likes - a.likes;
            })
        } if (e.target.value === "Date") {
            mediaObjList.sort(function (a, b) {
                return a.date - b.date;
            })
        } if (e.target.value === "Title") {
            mediaObjList.sort(function (a, b) {
                return a.title.localeCompare(b.title);
            })
        }
        console.log(mediaObjList)
        document.querySelector(".content").innerHTML = "";
        mediaObjList.forEach((mediaObj) => {
            displayMedia(mediaObj)
        })
    })

    selectedMediaList.forEach((selectedMedia) => {
        const firstName = selectedPhotographer.name.split(" ")[0];
        selectedMedia.src = `assets/images/${firstName}/${selectedMedia.image || selectedMedia.video}`;
        const mediaObj = mediaFactory(selectedMedia);
        mediaObjList.push(mediaObj);
        displayMedia(mediaObj);
    });
    getLikes()
}
initInfo();

function getLikes() {
    const likesDomList = [...document.querySelectorAll(".btn-like")];
    let sum = 0;
    likesDomList.forEach((domElem) => {
        const likeadd = parseInt(domElem.textContent);
        sum = sum + likeadd;
    }); 
const likesContainer = document.querySelector(".likesContainer")
likesContainer.innerHTML = sum;
}



