const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('menu');

menuBtn.addEventListener('click',navToggle);
console.log(menuBtn)
function navToggle(){
    menuBtn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}