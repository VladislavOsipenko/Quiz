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
        grabCursor: true,
        slidesPerView: 1,
    });

    const links = document.querySelectorAll('a');
    const buttons = document.querySelectorAll('button');

    function addPreventDefault(arg) {
        arg.forEach(elem => {
            elem.addEventListener('click', (e) => {
                e.preventDefault();
            })
        })
    }
    addPreventDefault(links);
    addPreventDefault(buttons);
    
    const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__li'),
        hamburger = document.querySelector('.header__hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('header__hamburger_active');
                menu.classList.toggle('header__menu_active');
            })
        });
})

