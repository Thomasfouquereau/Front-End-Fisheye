/**
 * affiche la somme des likes des media
 */

export function getLikes() {
    const likesDomList = [...document.querySelectorAll(".btn-like")];
    let sum = 0;
    likesDomList.forEach((domElem) => {
        const likeadd = parseInt(domElem.textContent);
        sum = sum + likeadd;
    });
    const likesContainer = document.querySelector(".likesContainer")
    likesContainer.innerHTML = sum;
}