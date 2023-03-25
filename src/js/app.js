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
    // addPreventDefault(buttons);
    
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
    
    const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    };

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    };

    modalCloseBtn.addEventListener('click', closeModal); 

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    };

    window.addEventListener('scroll', showModalByScroll);


    const animItems = document.querySelectorAll('._anim-items');

    if(animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart; 
                }

                if ((scrollY > animItemOffset - animItemPoint) && scrollY <(animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('_active');
                    }
                    
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(), 
                scrollLeft = window.scrollX || document.documentElement.scrollLeft,
                scrollTop = window.scrollY || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }
        setTimeout(() => {
            animOnScroll();
        }, 400);
        

    }
})

