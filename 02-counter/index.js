// Set the initial count
let count = 0;

// Select the value of our value span.
const value = document.querySelector('#value')

// Grab all the buttons
const buttons = document.querySelectorAll('.btn');

// The buttons are in a nodelist, so we can use forEach.
  // Loop through the nodelist, add the event listener to each button, access the event object. 
buttons.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    // Save the classList of the current btn in a variable.
    const classes = e.currentTarget.classList;
    // Check the variable with if statement.
    if (classes.contains('decrease')) {
      count--;
    } else if (classes.contains('increase')) {
      count++;
    } else {
      count = 0;
    }

    // Update the text content of the value span.
    value.textContent = count;
    
    // Change the color of the value span text depending on the value.
    if (count > 0) {
      value.style.color = 'green';
    }
    
    if (count < 0) {
      value.style.color = 'red';
    }
    
    if (count == 0) {
      value.style.color = 'black';
    }
  })
});
