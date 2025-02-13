const menu_mobile = document.getElementById('menu-mobile')
const menu_mobile__icon = document.getElementById('menu-mobile__icon');
const menu_mobile__icon__svg = document.getElementById('menu-mobile__icon__svg');
const menu_mobile__list = document.getElementById('menu-mobile__list');

menu_mobile__icon.addEventListener('click', Activated)

menu_mobile__icon__svg.addEventListener('mouseenter', ()=>{
    if (menu_mobile__icon.classList.contains('active')){
        menu_mobile__icon__svg.style.transform = "rotate(-180deg)";
    } else {
        menu_mobile__icon__svg.style.transform = "rotate(180deg)";
    }
})
menu_mobile__icon__svg.addEventListener('mouseleave', ()=>{
    menu_mobile__icon__svg.style.transform = "rotate(0)";
})
function Activated(){
    menu_mobile__icon.classList.toggle('active')
    menu_mobile__list.classList.toggle('active')
    menu_mobile.classList.toggle('active')
}
