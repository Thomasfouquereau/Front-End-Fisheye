export { photographerFactory };

/**
 * 
 * @param {data} data 
 * @returns constructeur pour les page html Media
 */

function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;
    const picture = `assets/photographers/${portrait}`;

    /**
     * 
     * @returns {HTMLElement} pour le contenu pricipal de la page princioal
     */

    function getUserCardDOM() {
        const a = document.createElement('a');
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        a.href = 'photographer.html?id=' + id;
        h2.textContent = name;
        h3.textContent = city + ", " + country;
        p.textContent = tagline;
        span.textContent = price + "€/jour";
        a.appendChild(article);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(span);
        return (a);
    }

    /**
     * 
     * @returns {HTMLElement} pour le contenu du bandeau de la page media
     */

    function getUserInfoDOM() {
        const main = document.createElement('section');
        const nom = document.createElement('h2');
        const ville = document.createElement('h3');
        const description = document.createElement('p');
        nom.textContent = name;
        ville.textContent = city + ", " + country;
        description.textContent = tagline;
        main.appendChild(nom);
        main.appendChild(ville);
        main.appendChild(description);
        return (main);
    }

    /**
     * 
     * @returns {HTMLElement} pour l image du bandeau de la page media
     */

    function getUserImgDOM() {
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        return (img);
    }

    /**
     * 
     * @returns {HTMLElement} pour le contenu de la page media
     */

    function getUserPriceDOM() {
        const prix = document.createElement('p');
        prix.classList.add('info-prix');
        prix.textContent = price + " €/jour";
        return (prix);
    }

    return { name, picture, city, country, tagline, price, getUserCardDOM, getUserInfoDOM, getUserImgDOM, getUserPriceDOM }
}

