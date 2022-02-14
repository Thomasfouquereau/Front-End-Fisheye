function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const a =document.createElement('a')
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const h3  = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span') 
        a.href = 'photographer.html'       
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
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}