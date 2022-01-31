import i18Obj from "./translate.js";

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-active');
const nav = document.querySelector('.nav-active');

function toggleMenu() {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);

/* change images*/
const portfolioBtns = document.querySelectorAll('.portfolio-btn')
const imgPortfolio = document.querySelectorAll('.portfolio-img')
function changeImages() {
    portfolioBtns.forEach(element => element.addEventListener('click', () => {
        portfolioBtns.forEach(element => element.classList.remove('active'));
        imgPortfolio.forEach((el, index) => {
            el.src = `assets/img/${element.dataset.season}/${index + 1}.jpg`
        })
        element.classList.add('active');
    }))
}
 changeImages();

 /*translate */
 
