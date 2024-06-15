import './styles.css';
import './home.css';
import './about.css';

import { appendProject } from './helpers';

const elements = {
  hamburguerMenu: document.querySelector('.hamburguer'),
  navBar: document.querySelector('.nav-bar'),
  links: document.querySelectorAll('.nav-bar a'),
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.display = 'grid';

  elements.hamburguerMenu.addEventListener('click', () => {
    if (elements.navBar.style.display == 'none') {
      elements.navBar.style.display = 'flex';
    } else {
      elements.navBar.style.display = 'none';
    }
  });

  elements.links.forEach((element) => {
    element.addEventListener('click', () => {
      if (element.textContent == 'Projects') return loadProjectsPage();
      if (element.textContent == 'Home') return loadHomePage();
    });
  });

  loadHomePage();
});

function loadHomePage() {
  // reset state

  const mainElement = document.body.querySelector('main');
  if (mainElement) {
    document.body.removeChild(mainElement);
  }

  elements.links.forEach((link) => {
    if (link.textContent === 'Home') {
      link.classList.add('selected')
    } else {
      link.classList.remove('selected');
    }
  });
  // build page

  const main = document.createElement('main');
  main.classList.add('index-main');

  const img = document.createElement('img');
  img.classList.add('alonso-img');
  const h1 = document.createElement('h1');
  h1.textContent = 'Fernando Alonso';
  const h2 = document.createElement('h2');
  h2.textContent = 'Web Developer';
  const button = document.createElement('a');
  button.classList.add('about-button');
  button.textContent = 'My Projects...';

  button.addEventListener('click', loadProjectsPage);

  main.appendChild(img);
  main.appendChild(h1);
  main.appendChild(h2);
  main.appendChild(button);

  document.body.appendChild(main);
}

function loadProjectsPage() {
  // reset state

  const mainElement = document.body.querySelector('main');
  if (mainElement) {
    document.body.removeChild(mainElement);
  }

  elements.links.forEach((link) => {
    if (link.textContent === 'Projects') {
      link.classList.add('selected')
    } else {
      link.classList.remove('selected');
    }
  });

  // build page

  const main = document.createElement('main');
  main.classList.add('about-main');

  const projectsContainer = document.createElement('div');
  projectsContainer.classList.add('projects-container');
  appendProject(projectsContainer, 4);

  main.appendChild(projectsContainer);
  document.body.appendChild(main);
}