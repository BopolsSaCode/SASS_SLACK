const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
const body = document.querySelector(".body");
const modal =  document.querySelector(".modal");
const btnRegion =  document.querySelector(".region");
const btnClose = document.querySelector('#closeModal')

toggleMenu.addEventListener("click", () => {
 toggleMenu.classList.toggle("open");
 headerNav.classList.toggle("open");
 body.classList.toggle("open");
});

const openModalHandler = () =>{
    btnRegion.classList.toggle('active')
    btnRegion.nextElementSibling.classList.toggle('active')
}

const closeModalHandler = () =>{
    modal.classList.toggle('active');
    btnRegion.classList.toggle('active')
}

btnClose.addEventListener('click',closeModalHandler)
btnRegion.addEventListener('click',openModalHandler);



const drop = document.querySelectorAll(".header__nav ul.nav li");
const drop1 = document.querySelectorAll(".slack__nav ul.nav li");
drop.forEach((link) => {
 link.addEventListener("click", () => {
  link.nextElementSibling.classList.toggle("open");
  link.querySelector("i").classList.toggle("open");
 });
});

drop1.forEach((link) => {
    link.addEventListener("click", () => {
     link.querySelector(".drop1").classList.toggle("open");
     link.querySelector("i").classList.toggle("open");
    });
   });

const kamote = document.querySelector(".header");
window.addEventListener("scroll", () => {
 console.log(window.scrollY);
 if (window.scrollY >= 500) {
  kamote.classList.add("white");
 } else {
  kamote.classList.remove("white");
 }
});

