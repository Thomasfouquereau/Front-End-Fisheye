export { photographerFactory };
function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const a = document.createElement('a')
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        a.href = 'photographer.html?id=' + id;
        h2.textContent = name;
        h3.textContent = city + ", " + country;
        p.textContent = tagline;
        span.textContent = price + "€/jour";
        a.appendChild(article)
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p)
        article.appendChild(span)
        return (a);
    }

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
        main.appendChild(description)
        return (main)
    }

    function getUserImgDOM() {
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        return (img)
    }

    return { name, picture, city, country, tagline, price, getUserCardDOM, getUserInfoDOM, getUserImgDOM, }
}
export { mediaFactory };
function mediaFactory(data) {
    const { title, likes, src} = data;
    const likeIcon = `assets/icons/heart.svg`;

    function getUserMediaDOM() {
        const article = document.createElement('article')
        const img = document.createElement('img' || 'video');
        const icon = document.createElement('img')
        const titles = document.createElement('p');
        const like = document.createElement('button');
        img.setAttribute("src", src)
        icon.setAttribute("src", likeIcon)
        const span = document.createElement('span')
        titles.textContent= title
        like.textContent = likes
        like.appendChild(icon)
        span.appendChild(titles)
        span.appendChild(like)
        article.appendChild(img)
        article.appendChild(span)
        return (article)
    }
    return { getUserMediaDOM }
}