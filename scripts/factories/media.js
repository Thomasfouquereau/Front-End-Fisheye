export { mediaFactory };

/**
 * 
 * @param {data} data 
 * @returns constructeur de la factory de la page media
 */

function mediaFactory(data) {
    let { title, likes, src, video, date} = data;
    const likeIcon = `assets/icons/heart.svg`;
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
        } else {
            const img = document.createElement('img');
            img.setAttribute("src", src);
            img.setAttribute("alt", title);
            article.appendChild(img);
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
            close.textContent = "X";
            const previous = document.createElement('button');
            previous.classList.add('previous');
            previous.textContent = "<";
            const next = document.createElement('button');
            next.classList.add('next');
            next.textContent = ">";
            const titleLightBox = document.createElement('p');
            titleLightBox.classList.add('title-lightbox');
            titleLightBox.textContent = title;

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

            lightBox.appendChild(previous);
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
            document.addEventListener("keydown", KeyboardListener );

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
        })

        return (article);
    }
     function getLikeDom () {
        const like = document.createElement('p')
        like.classList.add('info-like');
        const icon = document.createElement('img');
        icon.setAttribute("src", likeIcon);
        like.textContent = 
        like.appendChild(icon);
        return (like)
    }

    /**
     * 
     * @returns {object}
     */

    function getUserMediaInfoDOM() {
        const like = document.createElement('p')
        like.classList.add('info-like');
        const icon = document.createElement('img');
        icon.setAttribute("src", likeIcon);
        like.textContent =
        like.appendChild(icon);
        return (like)
    }

    function getLikeBtn() {
        return like
    }
    return { getUserMediaDOM, getUserMediaInfoDOM, title, likes, src, video, date, getLikeBtn, getLikeDom }
}