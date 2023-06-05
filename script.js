// declaring variables
let btn,
  menuOutline,
  closeOutline,
  mainNavMob,
  icon,
  mainNavMobile,
  submitBtn,
  contactInp,
  contactTextArea,
  sunIcon,
  moonIcon,
  footer,
  contactUs,
  gallarySection,
  aboutUs,
  header,
  body;

// initialize the varibles
const init = () => {
  // mobile navigation
  btn = document.querySelector(".mobile-nav-btn");
  menuOutline = document.querySelector("#menu-outline");
  closeOutline = document.querySelector("#close-outline");
  mainNavMob = document.querySelector(".main-nav-list-mobile");

  icon = document.querySelector(".themeIcon-container");
  body = document.querySelector("body");
  header = document.querySelector(".header");
  aboutUs = document.querySelector(".about-me");
  gallarySection = document.querySelector(".gallary-section");
  contactUs = document.querySelector(".form-container");
  footer = document.querySelector(".footer");
  moonIcon = document.querySelector(".moon-icon");
  sunIcon = document.querySelector(".sun-icon");
  contactTextArea = document.querySelector(".contact-textarea");
  contactInp = document.querySelectorAll(".contact-input");
  submitBtn = document.querySelector(".submit-button");
  mainNavMobile = document.querySelector(".main-nav-list-mobile");
};
init();

const toggler = () => {
  mainNavMob.classList.toggle("nav-open");
  menuOutline.classList.toggle("nav-open");
  closeOutline.classList.toggle("nav-open");
};
btn.addEventListener("click", toggler);

// current time and date
const showDateTime = () => {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  const dateTimeString = `${date} ${time}`;
  const dateTimeElement = document.getElementById("date-time");
  dateTimeElement.textContent = dateTimeString;
};
// will call showDateTime function every seconds
setInterval(showDateTime, 1000);

// toggle theme among dark and light mode
const toggleTheme = () => {
  body.classList.toggle("light-mode");
  header.classList.toggle("hero-light");
  aboutUs.classList.toggle("about-us-light");
  moonIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("hidden");
  contactUs.classList.toggle("contact-us-light");
  contactTextArea.classList.toggle("contactTextArea-light");
  submitBtn.classList.toggle("submitBtn-light");
  // iterate for every contactInp
  contactInp.forEach((el) => {
    el.classList.toggle("contactInp-light");
  });

  footer.classList.toggle("footer-light");
  mainNavMobile.classList.toggle("mainNavMobile-light");
};
// when the icon being clicked the toggleTheme function will be call
icon.addEventListener("click", toggleTheme);

// add box-shadow to the contact-us and about-us section

const contactFormY = contactUs.getBoundingClientRect().top + window.pageYOffset;
aboutUs = document.querySelector(".about-me");
const aboutUsY = aboutUs.getBoundingClientRect().top + window.pageYOffset;

// Add an event listener to the window object to listen for scroll events
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= contactFormY || window.pageYOffset >= aboutUsY) {
    header.classList.add("header-shadow");
  } else {
    header.classList.remove("header-shadow");
  }
});
