'use strict';

const switchWrapper = document.getElementById('switch-wrapper');
const switchSlider = document.getElementById('switch-slider');

switchWrapper.addEventListener('click', function() {
    switchSlider.classList.toggle('theme-switch__slider--dark-theme');
})