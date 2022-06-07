// We can do this one of two ways:
  // 1. traversing the dom
  // 2. using selectors inside the element

// method 1 - traversing
  // The buttons that we want event listeners on happen to be descendents of the element we want to manipulate. So we can use the parentElement property to go up the dom tree from the button to the question element. 

// grab all the question buttons
// const btns = document.querySelectorAll('.question-btn');

// // Loop over that node object to add the click listener to all of the items.
// btns.forEach(function(button) {
//   button.addEventListener('click', function(event) {
//     // Then we can traverse the dom tree by accessing the parentElement property of the currentTarget (and then the parentElement property of that parentElement).
//     const currentQuestion = event.currentTarget.parentElement.parentElement;

//     currentQuestion.classList.toggle('show-text')
//   })
// })



// ====================================================



// method 2 - using selectors
  // Instead of starting at the buttons, and using the dom tree, we could also just access the question elements directly. 

// Let's access the question elements since that's what we'll be manipulating. 
const questions = document.querySelectorAll('.question');

// Loop over the node object
questions.forEach(function(question) {
  // console.log(question)
  // Grab a button from inside the specific item
  const btn = question.querySelector('.question-btn');
  // console.log(btn)
  // Add an event listner
  btn.addEventListener('click', function() {
    // close all open questions when the event fires
    questions.forEach(function(questionItem) {
      // check if the current item is the currently clicked question, if not, remove the show-text class to hide it.
      if (questionItem !== question) {
        questionItem.classList.remove('show-text')
      }
    })
    // Toggle the class to show the current question
    question.classList.toggle('show-text');
  })
})