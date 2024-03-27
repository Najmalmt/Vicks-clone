function changeBg(){
    var header = document.getElementsByClassName('navbar')[0];

    var srollvalue = window.scrollY;
    if(srollvalue < 70){
        header.classList.remove('bgColor');
    }else {
        header.classList.add('bgColor');
    }
}

window.addEventListener('scroll', changeBg)

// Mobile Menu

const btnsOpenMenu = document.querySelector(".menu-logo");
const btnsCloseMenu = document.querySelector(".close-button");
const menu = document.querySelector(".menu");
const middleOverlay = document.querySelector(".middle-overlay");
const searchIcon = document.querySelector(".search i");

const openModal = function (e) {
    e.preventDefault();
    menu.classList.add("open");
    middleOverlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    // Change search icon color when menu is opened
    searchIcon.style.color = "#09357A"; // Change color to desired color
};

const closeModal = function (e) {
    e.preventDefault();
    menu.classList.remove("open");
    middleOverlay.classList.add("hidden");
    document.body.style.overflow = null;
    // Reset search icon color when menu is closed
    searchIcon.style.color = ""; // Change color to default color
};

btnsOpenMenu.addEventListener("click", openModal);
btnsCloseMenu.addEventListener("click", closeModal);
middleOverlay.addEventListener("click", closeModal);

function closeMenuOnResize() {
    if (window.innerWidth > 980) {
        menu.classList.remove("open");
        middleOverlay.classList.add("hidden");
        document.body.style.overflow = null;
        // Reset search icon color when menu is closed due to resize
        searchIcon.style.color = ""; // Change color to default color
    }
}

window.addEventListener("resize", closeMenuOnResize);


// =======================================//
// ============== slder ================//
// =================================== //
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const images = carousel.querySelectorAll("img");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    
    let currentIndex = 0;
    const maxIndex = images.length - 1;
    
    // Function to show/hide navigation buttons
    const toggleButtons = () => {
        leftButton.style.display = currentIndex === 0 ? "none" : "block";
        rightButton.style.display = currentIndex === maxIndex ? "none" : "block";
    };
    
    // Function to handle clicking on the left button
    leftButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            carousel.scrollTo({
                left: images[currentIndex].offsetLeft,
                behavior: "smooth"
            });
        }
        toggleButtons();
    });
    
    // Function to handle clicking on the right button
    rightButton.addEventListener("click", () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            carousel.scrollTo({
                left: images[currentIndex].offsetLeft,
                behavior: "smooth"
            });
        }
        toggleButtons();
    });
    
    // Show/hide buttons initially
    toggleButtons();
});


