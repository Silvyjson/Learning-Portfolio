const listElement = document.getElementById("nav");
const menuIcon = document.querySelector(".menu-icon");

const toggleList = () => {
  menuIcon.classList.toggle("open");

  if (listElement.style.display === "block") {
    listElement.style.display = "none";
  } else {
    listElement.style.display = "block";
  }
}

const hideNavOnScroll = () => {
  listElement.style.display = "none";
  menuIcon.classList.remove("open");
}

document.body.addEventListener('click', function (event) {

  if (!event.target.closest('.Navsection') && !event.target.closest('.dropdown-content a')) {
    hideNavOnScroll();
  }
});

const dropdownLinks = document.querySelectorAll('.dropdown-content a');
dropdownLinks.forEach(link => {
  link.addEventListener('click', () => {

    hideNavOnScroll();
  });
});

window.addEventListener('scroll', hideNavOnScroll);

let counter = 1;

setInterval(function () {
  document.getElementById('slide' + counter).checked = true;
  counter++;
  if (counter > 6) {
    counter = 1;
  }
}, 3000);


let projectsCounter = 1;
let experienceCounter = 1;
let satisfactionCounter = 1;

const projectsCounterElement = document.getElementById('projectsCounter');
const experienceCounterElement = document.getElementById('experienceCounter');
const satisfactionCounterElement = document.getElementById('satisfactionCounter');

function updateCounters() {
  projectsCounterElement.textContent = projectsCounter + '+';
  experienceCounterElement.textContent = experienceCounter + ' Year +';
  satisfactionCounterElement.textContent = satisfactionCounter + '%';

  if (projectsCounter > 1) {
    projectsCounter--;
  }

  if (experienceCounter > 1) {
    experienceCounter--;
  }

  if (satisfactionCounter < 100) {
    satisfactionCounter++;
  }

  if (projectsCounter >= 1 || experienceCounter >= 1 || satisfactionCounter <= 100) {
    setTimeout(updateCounters, 200);
  }
}


function startCountdownOnScroll() {
  const scrollThreshold = 200;
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > scrollThreshold) {
    updateCounters();
    window.removeEventListener('scroll', startCountdownOnScroll);
  }
}

window.addEventListener('scroll', startCountdownOnScroll);
