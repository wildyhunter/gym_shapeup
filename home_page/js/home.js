const btn_hamburguer = document.querySelector('.btn-hamburger');

function toogleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.querySelector('.nav-link');
    nav.classList.toggle('active');
}
function toogleMenu2(event) {
    if (event.type === 'touchstart') event.preventDefault();
    btn_hamburguer.classList.toggle('active');
}

btn_hamburguer.addEventListener('click', toogleMenu);
btn_hamburguer.addEventListener('click', toogleMenu2);
btn_hamburguer.addEventListener('touchstart', toogleMenu);
btn_hamburguer.addEventListener('touchstart', toogleMenu2);