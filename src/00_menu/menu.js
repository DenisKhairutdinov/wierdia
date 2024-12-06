'use strict';

const urlContent = './src/content.xlsx';

const menu = document.getElementById('menu');
const menuItems = document.getElementById('menu__items');

const dots = document.getElementById('menu__dots');
const dot = document.getElementsByClassName('menu__dot');

getMenuThemes(urlContent);

async function getMenuThemes(url) {
    const content = await (await fetch(url)).arrayBuffer();
    const workbook = XLSX.read(content);

    let themes = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames], {header: 1});

    console.log(workbook.SheetNames);

    for(let i = 0; i < workbook.SheetNames.length; i++) {
        let menuItem = document.createElement('li');
        menuItem.className = 'menu__item';
        menuItem.innerHTML = workbook.SheetNames[i];
        menuItems.append(menuItem);
    }

    for(let i = 0; i < Math.round(menuItems.getBoundingClientRect().width / menu.getBoundingClientRect().width) - 1; i++) {
        let menuDots = document.createElement('div');
        menuDots.className = 'menu__dot';
        dots.append(menuDots);
    }
    dot[0].classList.add('active-dot');

}
