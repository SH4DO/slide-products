


const container = document.querySelector(".swiper-wrapper");

const products = async() => {
    const requestJson = await fetch('./json/products.json');
    const productsContent = await requestJson.json();

    Object.entries(productsContent).forEach((element) =>{generateProducto(element[1])});

    Object.entries(productsContent).forEach((element) =>{generateProducto(element[1])});
   // console.log(Object.entries(productsContent))

   // generateProducto(productsContent.array);

   // console.log(productsContent);

   const swiper = new Swiper(".mySwiper",{
    effect : "coverflow",
    grabCursor: true,
    centeredSlides : true,
    slidesPerView: "auto",
    loop : true,
    coverflowEffect : {
        depth : 500,
        modifier : 1,
        slideShadows : true,
        rotate: 0,
        strech : 0
    }
});
}



function  generateProducto(product){

    let article = document.createElement('article');
    article.classList.add('swiper-slide');
    container.appendChild(article);

    let sectionProduct = document.createElement('section');
    sectionProduct.classList.add('product-content');

    let buttonComprar = document.createElement('a');
    buttonComprar.classList.add('btn-1');
    buttonComprar.innerHTML = "Comprar";

    const headerCard = " <section class='icons'>" +
                            "<i class='fa-solid fa-circle-arrow-left'></i>" +
                            "<img src='image/logo.png' alt='logo-local'>" +
                            "<i class='fa-regular fa-heart'></i>" +
                        "</section>" ;

    article.innerHTML = headerCard ;
    article.appendChild(sectionProduct);
    article.appendChild(buttonComprar);   
     
    //---------apartado de section producto--------------//
    let productTxt = document.createElement('div');
    let productImg = document.createElement('div');

    productTxt.classList.add('product-txt');
    productImg.classList.add('product-img');

    sectionProduct.appendChild(productTxt);
    sectionProduct.appendChild(productImg);

    //SECTION PRODUCT TEXT
    let price = document.createElement('span');
    let name = document.createElement('h3');
    let description = document.createElement('p');
    
    price.innerHTML= product.price;
    name.innerHTML= product.name;
    description.innerHTML= product.description;

    productTxt.appendChild(price);
    productTxt.appendChild(name);
    productTxt.appendChild(description);

    //SECTION PRODUCT IMG
    let imageProduct = document.createElement('img');
    imageProduct.src = product.image;

    productImg.appendChild(imageProduct);

}



products();
