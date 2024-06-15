function appendImage(div, num) {
  let counter = 0;
  while (counter < num) {
    const img = document.createElement('img');
    div.appendChild(img);

    counter++;
  }
}

export function appendProject(div, num) {
  let counter = 0;
  while (counter < num) {
    const project = document.createElement('a');
    project.href = 'https://github.com/';
    project.target = '_blank';
    project.classList.add('project');
    project.classList.add('about-surfaces');

    const h1 = document.createElement('h1');
    h1.textContent = 'Project Title';
    const projectImage = document.createElement('div');
    projectImage.classList.add('image');

    project.appendChild(h1);
    project.appendChild(projectImage);
    if (counter == 1) appendImage(project, 4);
    else appendImage(project, 3);

    div.appendChild(project);
    counter++;
  }
}
