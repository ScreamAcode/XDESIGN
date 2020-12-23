const toggler = document.querySelector(".toggler");
const hamburger = document.querySelector(".toggler-hamburger");
const navbarLinks = document.querySelector(".navbar-links");

let showMenu = false;

toggler.addEventListener("click",()=>{
    if(!showMenu){
        hamburger.classList.add("open")
        navbarLinks.classList.add("open")
        showMenu = true;
    }else{
        hamburger.classList.remove("open")
        navbarLinks.classList.remove("open")
        showMenu = false;
    }
});
