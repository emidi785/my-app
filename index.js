let btnMenu = document.querySelector('.btn');
let menu = document.querySelector('.nav__ul');
let line1 = document.getElementById('spn1');
let line2 = document.getElementById('spn2');
let line3 = document.getElementById('spn3');
let aElements = document.querySelectorAll('.nav__a');

btnMenu.addEventListener('click', () =>{
menu.classList.toggle('menu-visible');
line1.classList.toggle('spn1');
line2.classList.toggle('spn2');
line3.classList.toggle('spn3');
});

aElements.addEventListener('click', () => { 

});