// Grab the primary button
const modalBtn = document.querySelector('.modal-btn')
console.log(modalBtn);
// Grab the modal div
const modalOverlay = document.querySelector('.modal-overlay');
// Grab the close modal button
const modalClose = document.querySelector('.close-btn');

// Modal-overlay needs to be given a class of 'open-modal' to become visible. Remove it to make it invisible.

// Callback to toggle the class. 
function toggleModal() {
  modalOverlay.classList.toggle('open-modal');
}

// Event for main button click.
modalBtn.addEventListener('click', toggleModal);

// Event for close button click. 
modalClose.addEventListener('click', toggleModal);
