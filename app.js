const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const ex1 = document.querySelector(".line1")
const ex2 = document.querySelector(".line2")
const ex3 = document.querySelector(".line3")


hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open")
    links.forEach(link =>{
        link.classList.toggle("fade")
    })
    ex1.classList.toggle("ex")
    ex2.classList.toggle("ex")
    ex3.classList.toggle("ex")
})
