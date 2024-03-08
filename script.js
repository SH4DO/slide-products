const container = document.querySelector(".swiper-wrapper");

const products = async() => {

    const requestJson = await fetch('./json/products.json')
    .then(response => response.json())
    .then(data => {
        data.map((element) =>{generateProducts(element)});
        data.map((element) =>{generateProducts(element)});
    })
    .catch(err => {console.log(err)});

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


function generateProducts(element){
    const articleProduct = `
        <article class="swiper-slide">

            <section class="icons">
                <i class="fa-solid fa-circle-arrow-left"></i>
                <img src="image/logo.png" alt="logo-local">
                <i class="fa-regular fa-heart"></i>
            </section>

            <section class="product-content">
                <div class="product-txt">
                    <span>${element.price}</span>
                    <h3>${element.name}</h3>
                    <p>
                        ${element.description}
                    </p>
                </div>
                <div class="product-img">
                    <img src="${element.image}" alt="">
                </div>
            </section>

            <a href="" class="btn-1">Comprar</a>

        </article> 
    `;
    document.querySelector('.swiper-wrapper').innerHTML += articleProduct;
}

products();

