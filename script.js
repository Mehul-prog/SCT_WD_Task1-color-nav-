const scrollIndicator = document.getElementById('scrollIndicator');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const backToTop = document.getElementById('backToTop')

const sectionColors = {
  home: '#111',
  about: '#2e3d59',
  achievements: '#4a2c2a',
  records: '#2b4d42',
  gallery: '#3f2b4d',
  quotes: '#4d392b',
  stats: '#123456',
  contact: '#1d1d1d'
};

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY;
  let docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollPercent = (scrollTop / docHeight) * 100;
  scrollIndicator.style.width = scrollPercent + "%";

  if (scrollTop > 100) {
    navbar.classList.add('scrolled');
    backToTop.style.display = 'block';
  } else {
    navbar.classList.remove('scrolled');
    backToTop.style.display = 'none';
  }

  let currentSection = '';
  document.querySelectorAll('section').forEach(section => {
    if (scrollTop >= section.offsetTop - 80) {
      currentSection = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });

  if (sectionColors[currentSection]) {
    navbar.style.background = sectionColors[currentSection];
  } else {
    navbar.style.background = 'rgba(0, 0, 0, 0.8)';
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const galleryImages = document.querySelectorAll('.slider-img');
let currentIndex = 0;

function rotateGallery() {
  galleryImages.forEach((img, index) => {
    img.classList.remove('active');
    if (index === currentIndex) {
      img.classList.add('active');
    }
  });
  currentIndex = (currentIndex + 1) % galleryImages.length;
}

setInterval(rotateGallery, 3000);
