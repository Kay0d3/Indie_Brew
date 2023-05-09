let navOpen = document.querySelector('.menu')
let navClose = document.getElementById('close-btn')
let menu = document.querySelector('nav')

navOpen.addEventListener('click', function() {
    menu.classList.add('open-nav')
})
navClose.addEventListener('click', function() {
    menu.classList.remove('open-nav')
})
console.log(menu)