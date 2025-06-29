

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


  // ===============================================     loader
// Show the loader
const loader = document.getElementById("loader");
const body = document.body; // ✅ Get reference to <body>

loader.classList.remove("d-none");

// Hide after 3 seconds
setTimeout(() => {
  loader.classList.add("d-none");
}, 3000);



        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                    }
                }
            });
        });
        
        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
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


//=======================accounts code
  
