document.addEventListener("DOMContentLoaded", function () {
  // Info Icon Toggle
  const infoIcon = document.querySelector(".info-icon"); // Select the info icon
  const headerTop = document.querySelector(".header-top"); // Select the top header

  infoIcon.addEventListener("click", function () {
    headerTop.classList.toggle("show"); // Toggle the "show" class
  });

  // Menu Bar Toggle
  const menuBar = document.querySelector(".menu-bar"); // Select the menu-bar icon
  const navbar = document.querySelector(".navbar"); // Select the menu (navbar)

  menuBar.addEventListener("click", function () {
    navbar.classList.toggle("show"); // Toggle the "show" class
  });
});
window.addEventListener("scroll", function () {
  const headerMain = document.querySelector(".header-main");
  const headerTop = document.querySelector(".header-top");

  if (window.scrollY > 50) {
    headerMain.classList.add("scrolled");
    headerTop.classList.add("hidden"); // Hide the header top
  } else {
    headerMain.classList.remove("scrolled");
    headerTop.classList.remove("hidden"); // Show the header top
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggleButton");
  const dropdownMenus = document.querySelectorAll(".dropdown");

  function isMobile() {
    return window.innerWidth <= 768; // Define the mobile breakpoint
  }

  function addClickListeners() {
    toggleButtons.forEach((button, index) => {
      button.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent navigation
        const currentDropdown = dropdownMenus[index];

        // Toggle visibility for the clicked dropdown
        currentDropdown.classList.toggle("show");

        // Close other open dropdowns
        dropdownMenus.forEach((menu, i) => {
          if (i !== index) {
            menu.classList.remove("show");
          }
        });
      });
    });
  }

  function removeClickListeners() {
    toggleButtons.forEach((button) => {
      button.replaceWith(button.cloneNode(true)); // Remove all event listeners by cloning
    });
  }

  // Add or remove listeners based on screen size
  function updateDropdownBehavior() {
    if (isMobile()) {
      addClickListeners();
    } else {
      removeClickListeners();
      dropdownMenus.forEach((menu) => menu.classList.remove("show")); // Reset dropdowns
    }
  }

  // Run on load and on resize
  updateDropdownBehavior();
  window.addEventListener("resize", updateDropdownBehavior);
});

// Close dropdowns if clicked outside
document.addEventListener("click", function (event) {
  if (!event.target.closest(".menu-item")) {
    document.querySelectorAll(".dropdown").forEach((menu) => {
      menu.classList.remove("show");
    });
  }
});
// JavaScript for Product Slider
let currentIndex = 0; // Keeps track of the current slide
const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slider-image");
const totalSlides = slides.length;

// Function to go to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
}

// Function to go to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}

// Function to update the slider position
function updateSlider() {
  const offset = -currentIndex * 100; // Calculate the offset
  sliderWrapper.style.transform = `translateX(${offset}%)`;
}
