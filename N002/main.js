var first = document.querySelector('.linhas');

function um() {first.classList.toggle('first');}
first.addEventListener('click', um, true);

function dois() {first.classList.toggle('is-turned');}
first.addEventListener('click', dois, true);