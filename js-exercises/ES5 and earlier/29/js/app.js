const headers = document.querySelector('#headers');

headers.addEventListener('click', () => {
    toggleDOM(window.event.target.parentElement);
});

function toggleDOM ( panelElement ) {
    const header = panelElement.querySelector('.collapse-header');
    
    header.classList.toggle('collapsed-header');
    header.nextElementSibling.classList.toggle('collapsed-text');
}

