async function getPhotographersInfo() {
    try {
        const response = await fetch('/data/photographers.json');
        const data = await response.json();
        //const id = await response.filter(function(data) {
        //    return data.id == 243;
        //});
        return ({
            photographers: [...data.photographers]
        })
    }catch{
        console.log('error')
    }
}

function displayData(photographers) {
    const photographersInfo =  document.querySelector(".info");
    const photographersImg =  document.querySelector(".photograph-img");

    photographers.forEach((photographer) => {
        let photographerModel = photographerInfoFactory(photographer);
        const userInfoDOM = photographerModel.getUserInfoDOM();
        const userImgDOM = photographerModel.getUserImgDOM();
        photographersInfo.appendChild(userInfoDOM);
        photographersImg.appendChild(userImgDOM);
    });
};

async function initInfo() {
    const { photographers } = await getPhotographersInfo();
    displayData(photographers);
};
initInfo();

async function getmediaInfo() {
    try {
        const response = await fetch('/data/photographers.json');
        const data = await response.json();
        return ({
            photographers: [...data.media]
        })
    }catch{
        console.log('error')
    }
}

function displayData(photographers) {
    const mediaContent =  document.querySelector(".content");

    photographers.forEach((photographer) => {
        let mediaModel = mediaFactory(photographer);
        const usermediaDOM = mediaModel.getUserMediaDOM();
        mediaContent.appendChild(usermediaDOM);
    });
};

async function initMedia() {
    const { photographers } = await getmediaInfo();
    displayData(photographers);
};
initMedia();

