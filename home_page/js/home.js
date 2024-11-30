const btn_hamburguer = document.querySelector(".btn-hamburguer");

function toogleMenu() {
    const nav = document.querySelector(".nav-link");
    nav.classList.toggle("active");
}

btn_hamburguer.addEventListener("click", toogleMenu);