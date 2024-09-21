document.querySelector("#submenu").addEventListener("click", function () {
    const submenumobile = document.querySelector("ul .subLinks-mobile");

    if (submenumobile.style.opacity != "1") {
        submenumobile.style.opacity = "1";
    } else {
        submenumobile.style.opacity = "0";
    }
})

document.querySelector("#menu-abrir").addEventListener("click", function () {
    const abrirMenu = document.querySelector("nav.menu-mobile");

    if (abrirMenu.style.display != "block") {
        abrirMenu.style.display = "block"
    }
})

document.querySelector("#fechar").addEventListener("click", function () {
    const fecharMenu = document.querySelector("nav.menu-mobile");
    if (fecharMenu.style.display !== "none") {
        fecharMenu.style.display = "none";
    }
});