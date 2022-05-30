// Grab our links and toggler.
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.links');

// The long way, just for some practice.
// Listen for button click, check the classlist for the toggle class, add/remove as appropriate. 
// navToggle.addEventListener('click', function() {
//   if (navLinks.classList.contains('show-links')) {
//     navLinks.classList.remove('show-links');
//   } else if (!navLinks.classList.contains('show-links')) {
//     navLinks.classList.add('show-links');
//   }
// })

// A shorter way using toggle method B)
navToggle.addEventListener('click', function() {
  navLinks.classList.toggle('show-links');
})