// Object for generating random hex.
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Listen for button click, run random buddy.
btn.addEventListener('click', function(){
  // Initialize string to add the random hex values to.
  let hexColor = '#'

// Loop to run six times, generating a random value from the hex array and adding it to our hexColor string on each run.
  for (let i = 0; i < 6; i++) {
    hexColor = hexColor.concat(hex[Math.floor(Math.random() * hex.length)])
  }

  // Update the background color property.
  document.body.style.backgroundColor = hexColor

  // Update the text display.
  color.textContent = hexColor
})