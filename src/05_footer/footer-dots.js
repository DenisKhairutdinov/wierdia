'use strict';

const urlContent = './src/content.xlsx';
const dots = document.getElementById('footer__dots');

setQuantityDots(urlContent);

async function setQuantityDots(url) {

    const content = await (await fetch(url)).arrayBuffer();
    const workbook = XLSX.read(content);

    let value = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {header: 1});

    for(let i = 0; i < value[1].length; i++) {
        let dot = document.createElement('div');
        dot.className = 'dots__dot';
        dots.append(dot);
    }
}