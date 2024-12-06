'use strict';

const menuWrapper = document.getElementById('menu-wrapper');
const menu = document.getElementById('menu');
const menuItems = document.getElementById('menu__items');
const item = document.getElementsByClassName('menu__item');
const dot = document.getElementsByClassName('menu__dot');

let scrollStep = 0;
let animation = false;

menuWrapper.addEventListener('wheel', async function(e) {

   
    if (e.deltaY < 0 && scrollStep > 0 && animation === false) {
        animation = true;

        scrollStep -= menu.getBoundingClientRect().width;

        for (let i = 0; i < Math.round(menuItems.getBoundingClientRect().width / menu.getBoundingClientRect().width); i++) {
            if (dot[i].classList.contains('active-dot') === true && i < menuItems.getBoundingClientRect().width / scrollStep) {
                dot[i].classList.remove('active-dot');           
            }
        }
        dot[scrollStep / menu.getBoundingClientRect().width].classList.add('active-dot');

        let menuAnimation = menuItems.animate(
            { transform: `translate(${-scrollStep}px)` },
            { duration: 0, fill: 'forwards', delay: 200 },
        );

        let widthNull = menu.animate(
            { width: '0' },
            { duration: 150, fill: 'forwards', easing: 'ease-out', endDelay: 200 },
        );
        await widthNull.finished;
        widthNull.reverse();

        setTimeout(function() {animation = false}, 400);
        // clearTimeout(wheelPause);
    }

    else if (e.deltaY > 0 && scrollStep < (menuItems.getBoundingClientRect().width - menu.getBoundingClientRect().width) && animation === false) {
        animation = true;

        scrollStep += menu.getBoundingClientRect().width;
        
        for (let i = 0; i < Math.round(menuItems.getBoundingClientRect().width / menu.getBoundingClientRect().width); i++) {
            if (dot[i].classList.contains('active-dot') === true && i < menuItems.getBoundingClientRect().width / scrollStep) {
                dot[i].classList.remove('active-dot');           
            }
        }
        dot[scrollStep / menu.getBoundingClientRect().width].classList.add('active-dot');

        let menuAnimation = menuItems.animate(
            { transform: `translate(${- scrollStep}px)` },
            { duration: 0, fill: 'forwards', delay: 200 },
        );

        let widthNull = menu.animate(
            { width: '0' },
            { duration: 150, fill: 'forwards', easing: 'ease-out', endDelay: 200 },
        );
        await widthNull.finished;
        widthNull.reverse();

        setTimeout(function() {animation = false}, 400);
    }
});