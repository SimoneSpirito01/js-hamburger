
const hamburger = document.querySelector('i.fa-bars');

hamburger.addEventListener('click', function(){
    document.querySelector('div.hamburger-menu').classList.add('active');
})

const closeMenu = document.querySelector('i.fa-times');

closeMenu.addEventListener('click', function(){
    document.querySelector('div.hamburger-menu').classList.remove('active');
})