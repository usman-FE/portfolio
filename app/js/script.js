import { markups } from './portfolioView.js';

// /////////////////////////////////////////////////////
// ///////////////// LOAD PORTFOLIO PROJECTS ////////////////////////////////////
// /////////////////////////////////////////////////////
const projectbox = document.querySelector('.portfolio__project-box');
markups.forEach((markup) => projectbox.insertAdjacentHTML('beforeend', markup));

// /////////////////////////////////////////////////////
// ///////////////// MODAL ////////////////////////////////////
// /////////////////////////////////////////////////////
const hamburger = document.querySelector('.header__hamburger');
const hamburgerIcon = document.querySelector('.header__hamburger-icon');
const backdrop = document.querySelector('.backdrop');
const navBox = document.querySelector('.header__nav');
const navList = document.querySelector('.header__nav-list');
const links = document.querySelectorAll('.header__nav-link');

hamburger.addEventListener('click', function () {
  backdrop.classList.toggle('backdrop-show');
  navBox.classList.toggle('header__nav--show');
  navList.classList.toggle('header__nav-list--show');
  hamburgerIcon.classList.toggle('header__hamburger-icon--toggle');
});

links.forEach((link) => {
  link.addEventListener('click', function () {
    backdrop.classList.remove('backdrop-show');
    navBox.classList.remove('header__nav--show');
    navList.classList.remove('header__nav-list--show');
    hamburgerIcon.classList.remove('header__hamburger-icon--toggle');
  });
});

// /////////////////////////////////////////////////////
// ///////////////// ABOUT SECTION PARALLAX ////////////////////////////////////
// /////////////////////////////////////////////////////
const aboutParallex = document.getElementById('about');
const aboutParallexImg = document.getElementById('about-img');
const innerWidthMed = 720;
const innerWidthsmallest = 500;
const mediumCheck = window.innerWidth <= innerWidthMed;

const obsCallBack0 = (entries) => {
  const [entry] = entries;
  if (entry.isIntersecting && entry.intersectionRatio > 0) {
    if (entry.boundingClientRect.y < 0) return;
    aboutParallexImg.style.transform = 'translateY(250px)';
    let scroll1 = window.scrollY;
    window.addEventListener('scroll', function () {
      let value =
        250 + (window.scrollY - scroll1) * `${mediumCheck ? -0.5 : -0.35}`;
      aboutParallexImg.style.transform = `translateY(${value}px)`;
    });
  }
};

const options0 = {
  root: null,
  threshold: 0,
  rootMargin: '50px',
};

const observer0 = new IntersectionObserver(obsCallBack0, options0);
observer0.observe(aboutParallex);

// /////////////////////////////////////////////////////
// ///////////////// READ MORE / LESS ////////////////////////////////////
// /////////////////////////////////////////////////////
const btnColl = document.querySelectorAll('.read-more');
const btnLess = document.querySelectorAll('.read-less');
btnColl.forEach((btn) => {
  btn.addEventListener('click', function () {
    const content = this.parentElement.nextElementSibling;
    const dots = this.previousElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      dots.style.display = 'inline';
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      this.style.display = 'none';
      dots.style.display = 'none';
    }
  });
});

btnLess.forEach((btn) => {
  btn.addEventListener('click', function () {
    const content = this.parentElement;
    const dots =
      this.parentElement.previousElementSibling.querySelector('#dots');

    const readMore =
      this.parentElement.previousElementSibling.querySelector('.read-more');
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      dots.style.display = 'inline';
      readMore.style.display = 'inline';
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      dots.style.display = 'none';
    }
  });
});

// /////////////////////////////////////////////////////
// ///////////////// PORTFOLIO IMAGE PARALLAX ////////////////////////////////////
// /////////////////////////////////////////////////////

const projects = Array.from(
  document.querySelector('.portfolio__project-box').children
);

const obsCallBack = (entries) => {
  const [entry] = entries;
  if (entry.isIntersecting && entry.intersectionRatio > 0) {
    if (entry.boundingClientRect.y < 0) return;
    const portImg = entry.target.firstElementChild;
    portImg.style.transform = `translateY(${mediumCheck ? 90 : 250}px)`;
    let scroll1 = window.scrollY;
    window.addEventListener('scroll', function () {
      let value =
        (mediumCheck ? 90 : 250) +
        (window.scrollY - scroll1) * (mediumCheck ? -0.15 : -0.35);
      portImg.style.transform = `translateY(${value}px)`;
    });
  }
};

const options = {
  root: null,
  threshold: 0,
  rootMargin: '200px',
};

projects.forEach((project) => {
  const observer = new IntersectionObserver(obsCallBack, options);
  observer.observe(project);
});

// /////////////////////////////////////////////////////
// ///////////////// PROGESS BAR ////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////When the user scrolls the page, execute myFunction
window.onscroll = () => {
  myFunction();
};

function myFunction() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('myBar').style.width = scrolled + '%';
}

// /////////////////////////////////////////////////////
// ///////////////// REVEAL SECTIONS ////////////////////////////////////
// /////////////////////////////////////////////////////
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
