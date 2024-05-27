function applyStyles() {
    const mainEl = document.createElement('main');
    const divEl = document.createElement('div');
    const paragraphEl = document.createElement('p');
    mainEl.classList.add('mainClass', 'check', 'item');
    divEl.id = 'myDiv';
    paragraphEl.textContent = 'First paragraph';
    divEl.appendChild(paragraphEl);
    mainEl.appendChild(divEl);
    document.querySelector('.create_elements').appendChild(mainEl);
    }
    applyStyles();



module.exports = applyStyles;
