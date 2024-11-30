const btn_hamburguer = document.querySelector(".btn-hamburger");

function toogleMenu(event) {
    if(event.type === "touchstart") event.preventDefault();
    const nav = document.querySelector(".nav-link");
    nav.classList.toggle("active");
}

btn_hamburguer.addEventListener("click", toogleMenu);
btn_hamburguer.addEventListener("touchstart", toogleMenu);