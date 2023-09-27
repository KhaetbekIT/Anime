import Swiper from "swiper"
export const SliderFunc = () => {
    const swiper = new Swiper('.swiper', {
        pagination: {
            el: ".swiper-pagination",
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        effect: "fade",
        speed: 1500,
        loop: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    })
}

