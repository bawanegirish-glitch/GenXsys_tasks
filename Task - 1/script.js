

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        scrollBtn.style.display="block";
    }else{
    nav.classList.remove("sticky");
        scrollBtn.style.display="none";
    }
}







let menu = document.getElementById("navLink");
let menuOpen= document.getElementById("menuOpen");
let menuClose= document.getElementById("menuClose");

menuOpen.addEventListener("click",()=>{
navLink.style.display = "block";
menuOpen.style.display = "none";
menuClose.style.display = "block";
})


menuClose.addEventListener("click",()=>{
navLink.style.display = "none";
menuOpen.style.display = "block";
menuClose.style.display = "none";
})
