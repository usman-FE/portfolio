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
// ///////////////// GENERATE PORTFOLIO PROJECTS ////////////////////////////////////
// /////////////////////////////////////////////////////
const projectData = [
  {
    title: 'TODO | Classic app with a few twists!',
    type: 'application',
    description:
      'The sacred Todo application. A staple for every portfolio website. This one comes with a dark/light theme toggle.',
    descriptionAddiontal:
      ' Also includes the more traditional features like adding, removing, and checking/unchecking tasks. Also, added 3 filter options for some good measures.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'tailwind',
      'bootstrap',
      'sass',
    ],
    imagejpg: '../images/forkify.jpg',
    imagewebp: '../images/forkify.webp',
    link: 'https://www.google.com',
  },
  {
    title: 'TODO | Classic app with a few twists! 2',
    type: 'Game',
    description:
      'The sacred Todo application. A staple for every portfolio website. This one comes with a dark/light theme toggle.',
    descriptionAddiontal:
      ' Also includes the more traditional features like adding, removing, and checking/unchecking tasks. Also, added 3 filter options for some good measures.',
    technologies: [
      'tailwind',
      'css',
      'javascript',
      'tailwind',
      'bootstrap',
      'sass',
    ],
    imagejpg: '../images/forkify.jpg',
    imagewebp: '../images/forkify.webp',
    link: 'https://www.google.com',
  },
];

function generateProjectHTML(
  title,
  type,
  description,
  descriptionAddiontal,
  technologies,
  imagejpg,
  imagewebp,
  link
) {
  const maped = technologies.map((tech) => {
    return `<li class="technologies__item ${
      tech === 'JavaScript' ? 'js' : tech.toLowerCase()
    }">${tech}</li>`;
  });
  console.log(maped);
  return `
  <div class="portfolio__project">
  <div class="portfolio__image-box">
    <picture>
      <source srcset="${imagewebp}" />
      <img
        src="${imagejpg}"
        alt="Room Website Homepage"
        title="Room Website Homepage"
        class="portfolio__image img-fluid"
      />
    </picture>
  </div>
  <div class="portfolio__details-box">
    <p class="project-caption">${type}</p>
    <h4 class="heading-4 portfolio__project-title">
      ${title}
    </h4>
    ${
      descriptionAddiontal
        ? `<p class="detail-paragraph">
      ${description}
      <span
        id="dots"
        >...</span
      >
      <span class="read-more">read more &darr;</span>
    </p>
    <p class="detail-paragraph collapsible">
      ${descriptionAddiontal}
      <span class="read-less">read less &uarr;</span>
    </p>`
        : `<p class="detail-paragraph">
            ${description}
          </p>`
    }
    
    <ul class="technologies">
     ${maped.join('')}
    </ul>
    <a
      href="${link}"
      target="_blank"
      class="btn-primary"
      >View Project</a
    >
  </div>
  </div>
  
  `;
}
//  title,
//   type,
//   description,
//   technologies,
//   imagejpg,
//   imagewebp,
//   link

const html = generateProjectHTML(
  projectData[0].title,
  projectData[0].type,
  projectData[0].description,
  projectData[0].descriptionAddiontal,
  projectData[0].technologies,
  projectData[0].imagejpg,
  projectData[0].imagewebp,
  projectData[0].link
);

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
const projectbox = document.querySelector('.portfolio__project-box');

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
