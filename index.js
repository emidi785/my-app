let btnMenu = document.querySelector('.btn');
let menu = document.querySelector('.nav__ul');
let line1 = document.getElementById('spn1');
let line2 = document.getElementById('spn2');
let line3 = document.getElementById('spn3');
let aElements1 = document.querySelector('.nav__a1');
let aElements2 = document.querySelector('.nav__a2')
let aElements3= document.querySelector('.nav__a3')
let over = document.getElementById('overlay');
btnMenu.addEventListener('click', () => {
menu.classList.toggle('menu-visible');
line1.classList.toggle('spn1');
line2.classList.toggle('spn2');
line3.classList.toggle('spn3');
over.classList.toggle('over-visible')
});

aElements1.addEventListener('click', () => { 
menu.classList.remove('menu-visible');
line1.classList.remove('spn1');
line2.classList.remove('spn2');
line3.classList.remove('spn3');
over.classList.remove('over-visible');
});
aElements2.addEventListener('click', () => {
    menu.classList.remove('menu-visible');
    line1.classList.remove('spn1');
    line2.classList.remove('spn2');
    line3.classList.remove('spn3');
    over.classList.remove('over-visible');
    });
aElements3.addEventListener('click', () => {
     menu.classList.remove('menu-visible');
     line1.classList.remove('spn1');
     line2.classList.remove('spn2');
     line3.classList.remove('spn3');
     over.classList.remove('over-visible');
        });


        // contain.addEventListener('click', () => {
        //     menu.classList.remove('menu-visible');
        //     line1.classList.remove('spn1');
        //     line2.classList.remove('spn2');
        //     line3.classList.remove('spn3');
        //  });
