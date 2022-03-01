export { photographerFactory };
function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, likes, title, id } = data;
    const picture = `assets/photographers/${portrait}`;
    const [firstName] = name.split(' ')
    const imageUser = `assets/images/${firstName}/${portrait}`;

    //trouver comment integrer l id au lien avec une variable dans le lien
    function getUserCardDOM() {
        const a = document.createElement('a')
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        a.href = 'photographer.html' + id;
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
        const main = document.createElement('article');
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
        img.setAttribute("src", imageUser);
        return (img)
    }

    function getUserMediaDOM() {
        const media = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", imageUser);
        const nomLike = document.createElement('span');
        const heart = document.createElement('img');
        nomLike.textContent = title + likes + heart;
        media.appendChild(img);
        media.appendChild(nomLike);
        return (media)
    }

    console.log(getUserMediaDOM)

    return { name, picture, city, country, tagline, price, getUserCardDOM, getUserInfoDOM, getUserImgDOM, getUserMediaDOM }
}





