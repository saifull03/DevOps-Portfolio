// Simple Alert on form submission
document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  this.reset();
});

<script src="asset/js/script.js"></script>
