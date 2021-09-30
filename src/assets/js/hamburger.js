var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".mobile-nav");
var body = document.querySelector('body');
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    nav.classList.toggle('opened');
    body.classList.toggle('lock-scroll');
});