// local reviews data
const reviews = [
  {
    id: 1,
    name: "suz smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter pietrovsky",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill billingsworth",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


// select our items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


// Set which review item to load by default.
let currentItem = 0;

// Load initial item
  // Listen to the window for when the content loads. 
window.addEventListener('DOMContentLoaded', function() {
  // On page load, call the showPerson function passing the hard-coded default (currentItem) to load the default review.
  showPerson(currentItem)
});

// Show person based on which item is selected
function showPerson(person) {
  // Initialize variable to store the current review.
  const item = reviews[person];
  // Assign value to the image source property to grab image from the current review.
  img.src = reviews[person].img;
  // Same for name, job, and review text.
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// Show next person's review
nextBtn.addEventListener('click', function() {

  currentItem++;
  
  // Prevent iterating past the number of items in the list.
  if(currentItem > reviews.length - 1) {
    currentItem = 0
  }

  // Call the show person to render the current item.
  showPerson(currentItem);
});


// Show previous person's review
prevBtn.addEventListener('click', function() {
  currentItem--;

  if(currentItem < 0) {
    currentItem = reviews.length - 1;
  }

  showPerson(currentItem);
});


// Random button
randomBtn.addEventListener('click', function() {
  
  // Generate a random index
  currentItem = Math.floor(Math.random() * reviews.length);

  showPerson(currentItem);
})