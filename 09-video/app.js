// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// ***The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


// Grab the button
const switchBtn = document.querySelector('.switch-btn');
// Grab the video container
const video = document.querySelector('.video-container');

// Listen for a click on the button, check for the .slide class on the button. Toggle the class to move the sliding container element. Use the play/pause methods for playback control. 
switchBtn.addEventListener('click', function() {
  if (!switchBtn.classList.contains('slide')) {
    switchBtn.classList.add('slide');
    video.pause();
  } else {
    switchBtn.classList.remove('slide');
    video.play();
  }
})

// In case the video takes perceptible time to load, run a pre-loader with a gif in its place. 

// Grab the preloader element
const preloader = document.querySelector('.preloader');

// Listen to the window for the load event (when all dependent resources ie. images & stylesheets have finished loading)
  // Then we want to add the hide class to the preloader element. 
window.addEventListener('load', function() {
  preloader.classList.add('hide-preloader');
})
