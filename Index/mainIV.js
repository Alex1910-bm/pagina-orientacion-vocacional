document.querySelector(".menu-btn").addEventListener("click", () =>{
    document.querySelector(".nav-menu").classList.toggle("show")
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.text', { delay: 500 });
ScrollReveal().reveal('.valores', { delay: 500 });