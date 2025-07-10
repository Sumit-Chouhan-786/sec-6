

//=========================================================   sidebar toggle code 

  function toggleSidebar() {
    const sidebar = document.querySelector('.course_sidebar');
    const toggleBtn = document.getElementById('sidebarToggle').querySelector('i');

    sidebar.classList.toggle('active');

    // Toggle icon class
    if (sidebar.classList.contains('active')) {
      toggleBtn.classList.remove('fa-bars');
      toggleBtn.classList.add('fa-times'); // cross icon
    } else {
      toggleBtn.classList.remove('fa-times');
      toggleBtn.classList.add('fa-bars'); // hamburger
    }
  }

  //================================================= Close sidebar 
  document.querySelectorAll('.tab-link').forEach(button => {
    button.addEventListener('click', () => {
      if (window.innerWidth <= 576) {
        const sidebar = document.querySelector('.course_sidebar');
        const toggleBtn = document.getElementById('sidebarToggle').querySelector('i');
        sidebar.classList.remove('active');
        toggleBtn.classList.remove('fa-times');
        toggleBtn.classList.add('fa-bars');
      }
    });
  });



  // ===============================================     hero slider


  const images = document.querySelectorAll('.slider-img');
  let index = 0;

  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 4000); // 4 seconds per image


const card = document.querySelector('.card');
const container = document.querySelector('.card-container');
const cardImage = document.querySelector('.card-image');

let isMouseOver = false;
let rotateX = 0;
let rotateY = 0;

function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function updateCardTransform() {
    const transformString = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.transform = transformString;
}

  
