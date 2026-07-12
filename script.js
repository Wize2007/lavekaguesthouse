// ===============================
// MOBILE NAVIGATION
// ===============================

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if(navToggle){

    navToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("show");

    });

}
// ===============================
// STICKY NAVBAR
// ===============================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.classList.add("sticky");

}else{

navbar.classList.remove("sticky");

}

});
const reveals=document.querySelectorAll(".reveal");

function revealSections(){

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

const visible=150;

if(top<window.innerHeight-visible){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();
document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const current=+counter.innerText;

const increment=target/100;

if(current<target){

counter.innerText=Math.ceil(current+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});
const faqs=document.querySelectorAll(".faq-item");

faqs.forEach(faq=>{

const button=faq.querySelector(".faq-question");

button.addEventListener("click",()=>{

faq.classList.toggle("open");

});

});
const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>400?"block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
window.addEventListener("load",()=>{

document.getElementById("loader").style.display="none";

});
// ===========================
// GALLERY LIGHTBOX
// ===========================

const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.querySelector(".close-lightbox");

galleryItems.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImage.src = image.src;

    });

});

if(closeLightbox){

    closeLightbox.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

}

if(lightbox){

    lightbox.addEventListener("click", (e) => {

        if(e.target === lightbox){

            lightbox.classList.remove("active");

        }

    });

}
// ===========================
// BOOKING FORM
// ===========================

const bookingForm = document.getElementById("bookingForm");

if(bookingForm){

    bookingForm.addEventListener("submit", function(e){

        e.preventDefault();

        document.getElementById("booking-message").innerHTML =

        "✅ Thank you! Your reservation request has been received. We will contact you shortly.";

        bookingForm.reset();

    });

}
// ===========================
// CONTACT FORM
// ===========================

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        document.getElementById("contact-message").innerHTML =

        "✅ Thank you for contacting us. We will get back to you as soon as possible.";

        contactForm.reset();

    });

}
// ===========================
// DARK MODE
// ===========================

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

// Load saved theme
if(localStorage.getItem("theme") === "dark"){

    body.classList.add("dark-mode");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

}

themeToggle.addEventListener("click",()=>{

    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        localStorage.setItem("theme","light");

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});