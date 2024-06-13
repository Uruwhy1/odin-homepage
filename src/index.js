import './styles.css';
import './index.css'

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
      if (element.textContent == 'About') return loadAboutPage();
      if (element.textContent == 'Index') return loadIndexPage();
    });
  });

  loadIndexPage();
});

function loadIndexPage() {
  // reset state
  elements.links[0].textContent = 'About';
  elements.links[1].textContent = 'Projects';
  elements.links[2].textContent = 'Contact';
  if (document.body.querySelector('main'))
    document.body.removeChild(document.body.querySelector('main'));

  // build page
  const main = document.createElement('main');
  main.classList.add('index-main')

  const img = document.createElement('img');
  const h1 = document.createElement('h1');
  h1.textContent = 'Facundo Tuñas';
  const h2 = document.createElement('h2');
  h2.textContent = 'Web Developer';
  const button = document.createElement('a');
  button.classList.add('about-button');
  button.textContent = 'About me...';

  button.addEventListener('click', loadAboutPage);

  main.appendChild(img);
  main.appendChild(h1);
  main.appendChild(h2);
  main.appendChild(button);

  document.body.appendChild(main);
}

function loadAboutPage() {
  // reset state
  elements.links[0].textContent = 'Index';
  elements.links[1].textContent = 'Projects';
  elements.links[2].textContent = 'Contact';
  console.log('xDD');
  if (document.body.querySelector('main'))
    document.body.removeChild(document.body.querySelector('main'));

  // build page
  const main = document.createElement('main');
  main.classList.add('abput-main')

  document.body.appendChild(main);
}
