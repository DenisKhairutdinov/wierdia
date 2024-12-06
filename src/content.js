'use strict';

const urlContent = './src/content.xlsx';

const title = document.getElementById('title');
const articleMenuItems = document.getElementById('article-menu__items');
const menuItem = document.getElementsByClassName('article-menu__item');
const annotation = document.getElementById('article-cover__annotation');
const videoWrapper = document.getElementById('article-cover__video-wrapper');
const video = document.getElementById('article-cover__video');

contentSelection(urlContent);

async function contentSelection(url) {

    const content = await (await fetch(url)).arrayBuffer();
    const workbook = XLSX.read(content);

    let value = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {header: 1});

    title.innerHTML = workbook.SheetNames[0];


    for(let i = 0; i < value[1].length; i++) {
        let item = document.createElement('li');
        item.className = 'article-menu__item';
        articleMenuItems.append(item);
    }

    for(let i = 0; i < menuItem.length; i++) {
        menuItem[i].innerHTML = value[1][i];
    }

    annotation.innerHTML = value[4][0];  
    
    video.style.width = `${videoWrapper.offsetHeight * 16 / 9}px`;
    video.style.transform = `translateX(${(videoWrapper.offsetWidth - video.offsetWidth) / 2}px`;
}