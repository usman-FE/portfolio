import { projects } from './projects.js';

const generateMarkup = function (project) {
  return `
    <div class="portfolio__project">
    <div class="portfolio__image-box">
    <picture>
        <source srcset="${project.image}.webp" />
        <img
        src="${project.image}.jpg"
        alt="${project.alt}"
        title="${project.alt}"
        class="portfolio__image img-fluid"
        />
    </picture>
    </div>
    <div class="portfolio__details-box">
    <p class="project-caption">${project.type}</p>
    <h4 class="heading-4 portfolio__project-title">
    ${project.title}
    </h4>
    ${
      project.descriptionTwo
        ? `<p class="detail-paragraph">
                ${project.description}<span
                id="dots"
                >...</span
                >
                <span class="read-more">read more &darr;</span>
            </p>
            <p class="detail-paragraph collapsible">
                ${project.descriptionTwo}
                <span class="read-less">read less &uarr;</span>
             </p>`
        : ` <p class="detail-paragraph">
                ${project.description}
            </p>`
    }
    
    <ul class="technologies">
        ${project.technologies
          .map((tech) => {
            return `<li class="technologies__item ${tech.toLowerCase()}">${tech}</li>`;
          })
          .join('')}
    </ul>
    <a
        href="${project.projectUrl}"
        target="_blank"
        class="btn-primary"
        >View Project</a
    >
    </div>
</div>
    `;
};

export const markups = projects.map((project) => {
  return generateMarkup(project);
});
