let btnOpen = document.querySelector('.btn');
let btnClose = document.querySelector('.btn-close');
let menu = document.querySelector('.nav__ul');
let search = document.querySelector('.search');
let searchIcon = document.querySelector('.search-icon');
let logo = document.querySelector('.logo');
let closeIcon = document.querySelector('.close-icon');

btnOpen.addEventListener('click', function open() {
 menu.classList.toggle('menu-visible');
 btnClose.style.visibility='visible';
});

btnClose.addEventListener('click', () => {
menu.classList.remove('menu-visible');
});

searchIcon.addEventListener('click', () => {
search.style.display='block'
search.style.opacity='1'
logo.style.display='none'
btnOpen.style.display='none'
closeIcon.style.display='block'
searchIcon.style.display='none'

});
    
closeIcon.addEventListener('click', () => {
    logo.style.display='block'
    search.style.display='none'
    btnOpen.style.display='block'
    searchIcon.style.display='block'
    closeIcon.style.display='none'
});
        