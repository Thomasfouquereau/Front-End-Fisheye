import { getLikes } from "../utils/utils.js"

export { mediaFactory };

/**
 * 
 * @param {data} data 
 * @returns constructeur de la factory de la page media
 */

function mediaFactory(data) {
    let { title, likes, src, video, date } = data;
    const likeIcon = `assets/icons/heart.svg`;
    const previousSrc = `assets/icons/LBprevious.svg`;
    const nextSrc = `assets/icons/LBnext.svg`;
    const closeSrc = `assets/icons/LBclose.svg`;
    let like;

    /**
     * 
     * @returns {HTMLElement} pour le contenu pricipal de la page media
     */

    function getUserMediaDOM() {
        const article = document.createElement('button');
        article.classList.add('card');
        const icon = document.createElement('img');
        icon.classList.add('img-like');
        icon.setAttribute("alt", "like");
        const titles = document.createElement('p');
        titles.classList.add('title-img');
        like = document.createElement('button');
        like.classList.add('btn-like');
        const span = document.createElement('span');
        span.classList.add('container');

        if (video) {
            const mp4 = document.createElement('video');
            mp4.setAttribute("src", src);
            mp4.controls = true;
            article.appendChild(mp4);
            mp4.classList.add('btn-mp4');
        } else {
            const img = document.createElement('img');
            img.setAttribute("src", src);
            img.setAttribute("alt", title);
            article.appendChild(img);
            img.classList.add('btn-img');
        }

        icon.setAttribute("src", likeIcon);
        titles.textContent = title;
        like.textContent = likes;
        like.appendChild(icon);
        span.appendChild(titles);
        span.appendChild(like);
        article.appendChild(span);

        /**
         * @description: creee une lightbox pour afficher les images
         */

        article.addEventListener("click", function () {
            const lightBox = document.createElement('article');
            lightBox.classList.add('lightbox');
            const close = document.createElement('button');
            close.classList.add('close');
            if (video) {
                const mp4 = document.createElement('video');
                mp4.setAttribute("src", src);
                mp4.controls = true;
                lightBox.appendChild(mp4);
                mp4.classList.add('img-ligthbox');
            } else {
                const img = document.createElement('img');
                img.setAttribute("src", src);
                lightBox.appendChild(img);
                img.classList.add('img-ligthbox');
            }

            const closeIcon = document.createElement('img');
            closeIcon.setAttribute("src", closeSrc);
            close.appendChild(closeIcon);
            const previous = document.createElement('button');
            previous.classList.add('previous');
            const previousImg = document.createElement('img');
            previousImg.setAttribute("src", previousSrc);
            previousImg.setAttribute("alt", "previous");
            const next = document.createElement('button');
            next.classList.add('next');
            const nextImg = document.createElement('img');
            nextImg.setAttribute("src", nextSrc);
            nextImg.setAttribute("alt", "next");
            const titleLightBox = document.createElement('p');
            titleLightBox.classList.add('title-lightbox');
            titleLightBox.textContent = title;
            next.appendChild(nextImg);
            previous.appendChild(previousImg);
            lightBox.insertBefore(previous, lightBox.childNodes[0]);
            
            lightBox.appendChild(next);
            lightBox.appendChild(close);
            lightBox.appendChild(titleLightBox);

            document.body.appendChild(lightBox);
            previous.focus();

            /**
             * @description: ferme la lightbox
             */

            close.addEventListener("click", function () {
                lightBox.remove();
            });

            function KeyboardListener(e) {
                if (e.key === "Escape" || e.key === "Esc") {
                    lightBox.remove();
                } else if (e.key === "ArrowLeft" || e.key === "Left") {
                    document.removeEventListener("keydown", KeyboardListener)
                    previous.click();
                } else if (e.key === "ArrowRight" || e.key === "Right") {
                    document.removeEventListener("keydown", KeyboardListener)
                    next.click();
                }
            }
            document.addEventListener("keydown", KeyboardListener);

            /**
             * @description: affiche la lightbox suivante
             */

            next.addEventListener("click", function () {
                lightBox.remove();

                if (article.nextElementSibling !== null) {

                    article.nextElementSibling.click();
                } else {
                    article.parentNode.children[0].click();
                }
            });

            /**
             * @description: affiche la lightbox precedente
             */

            previous.addEventListener("click", function () {
                lightBox.remove();
                if (article.previousElementSibling !== null) {

                    article.previousElementSibling.click();
                } else {
                    article.parentNode.children[article.parentNode.children.length - 1].click();
                }

            });
        })

        /**
         * @description: ajoute un like a la media
         */

        like.addEventListener("click", function (e) {
            e.stopImmediatePropagation();
            likes += 1;
            like.innerHTML = likes + '<img src="assets/icons/heart.svg" alt="heart">';
            getLikes();
        })

        return (article);
    }


    function getLikeBtn() {
        return like
    }
    return { getUserMediaDOM, title, likes, src, video, date, getLikeBtn }
} 