import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


import Swiper, { Navigation, Pagination } from "swiper";

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.winner__swiper', {
        modules: [Navigation, Pagination],
        navigation: {
            nextEl: '.winner__arrows-right',
            prevEl: '.winner__arrows-left',
          },
        grabCursor: false,
        slidesPerView: 1,
    });
})

