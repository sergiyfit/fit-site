let bur = document.querySelector(".burMenu")
let menu = document.querySelector(".header-menu-main")

bur.onclick = () => {
    bur.classList.toggle("burMenuOpen")
    menu.classList.toggle("menuOpen")
}