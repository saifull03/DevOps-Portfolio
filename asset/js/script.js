// Simple Alert on form submission
document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  this.reset();
});

<script src="asset/js/script.js"></script>
const roles = ["Md Saiful Islam", "a DevOps Engineer", "a Cloud Enthusiast", "a CI/CD Automator"];
let i = 0, j = 0, current = '', isDeleting = false;

function type() {
  const display = document.getElementById('typewriter');
  if (!display) return;

  if (isDeleting) {
    current = roles[i].substring(0, j--);
  } else {
    current = roles[i].substring(0, j++);
  }

  display.innerHTML = current;

  if (!isDeleting && j === roles[i].length) {
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", type);


// Scroll to top button functionality
window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  if (!btn) return;
  btn.style.display = window.scrollY > 100 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dark mode toggle functionality
document.getElementById("darkToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
