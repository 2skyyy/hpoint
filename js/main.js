var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true
    }
});



//side

const hiddenMenu = document.querySelector('.hidden_menu');
const menu = document.querySelector('.menu');
const closed = document.querySelector('.close');

menu.onclick = () => {
    hiddenMenu.classList.add('active');
}
closed.onclick = () => {
    hiddenMenu.classList.remove('active');
}
