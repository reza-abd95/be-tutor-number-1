const $ = document
let headerIcon = $.querySelector(".header__icon")
let header_Slide = $.querySelector(".header__slide")
let dark_Container = $.querySelector(".dark-container")
let slide_close = $.querySelector(".header__slide-close")

headerIcon.addEventListener('click' , function openmenu() {
    header_Slide.style.right = "0px"
    dark_Container.style.display = "unset"
    console.log("open menu");
})
slide_close.addEventListener('click' , function closemenu() {
    header_Slide.style.right = "-250px"
    dark_Container.style.display = "none"
})
dark_Container.addEventListener('click' , function closemenu() {
    header_Slide.style.right = "-250px"
    dark_Container.style.display = "none"
})