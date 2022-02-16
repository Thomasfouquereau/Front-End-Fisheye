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

function  photographerInfoFactory (data){
    const { name, city, country, tagline, portrait } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserInfoDOM() {
        const article = document.createElement( 'article' );
        const h2 = document.createElement( 'h2' );
        const h3  = document.createElement('h3');
        const p = document.createElement('p');
        h2.textContent = name;
        h3.textContent = city + ", " + country;
        p.textContent = tagline;
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p)
        return (article)
    }
    function getUserImgDOM(){
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        return(img)
    }
    return { name, city, country, tagline, picture, getUserInfoDOM, getUserImgDOM }
}

function mediaFactory (data){
    const{title, image, likes} = data;
    const imageUser = `assets/images/Marcel/${image}`;

    function getUserMediaDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", imageUser);
        const span = document.createElement( 'span' );
        const heart = document.createElement( 'img' );
        span.textContent = title + likes + heart;
        article.appendChild(img);
        article.appendChild(span);
        return (article)
    }
    return {title, image, likes,getUserMediaDOM}
}

