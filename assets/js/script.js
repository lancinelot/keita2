'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function(elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function() {
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
    });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
    window.scrollY >= 400 ? header.classList.add("active") :
        header.classList.remove("active");
});
document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector('.scroll-container');
    let scrollAmount = 0;
    const scrollStep = 2; // The amount of pixels to scroll each step
    const scrollInterval = 20; // Time in milliseconds between each scroll step

    function startScrolling() {
        scrollAmount += scrollStep;
        scrollContainer.scrollLeft = scrollAmount;

        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollAmount = 0; // Reset scroll amount when end is reached
        }

        setTimeout(startScrolling, scrollInterval);
    }

    startScrolling();
});