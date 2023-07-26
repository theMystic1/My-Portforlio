'strict mode';

const btn = document.querySelector('.btn--dark');
const darkModeBtn = document.querySelector('.moon--btn');
const lightModeBtn = document.querySelector('.sun--btn');
const body = document.querySelector('body');

let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
  body.classList.add('darkMode');
  lightModeBtn.classList.add('hidden');
  darkModeBtn.classList.remove('hidden');
  localStorage.setItem('darkMode', 'enable');
};

const disableDarkMode = () => {
  body.classList.remove('darkMode');
  lightModeBtn.classList.remove('hidden');
  darkModeBtn.classList.add('hidden');
  localStorage.setItem('darkMode', null);
};

// to store the dark setying for later
if (darkMode === 'enable') enableDarkMode();

btn.addEventListener('click', function () {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enable') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// media nav menu
const menuBtn = document.getElementById('menu');
const closeBtn = document.getElementById('close');
const topBar = document.querySelector('.topbar');
const slideShow = document.querySelector('.unl');
const btnSlide = document.querySelector('.btnslide');

const addSlide = function () {
  topBar.classList.add('nav-open');
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'block';
};
const removeSlide = function () {
  topBar.classList.remove('nav-open');
  menuBtn.style.display = 'block';
  closeBtn.style.display = 'none';
};

menuBtn.addEventListener('click', function () {
  addSlide();
  // topBar.classList.toggle('nav-open');
});

closeBtn.addEventListener('click', function () {
  removeSlide();
});
