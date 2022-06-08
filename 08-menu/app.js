//* */ Menu items array
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// The parent element of all the single menu items is the .section-center div. So let's access that. 
const sectionCenter = document.querySelector('.section-center');

//* Grab the filter buttons
const filterBtns = document.querySelectorAll('.filter-btn');

// When the page loads, we want to display all the content.
  // Listen for the page load.
window.addEventListener('DOMContentLoaded', function() {
  // Call the function to create the innerHTML, and pass it the menu array. 
  displayMenuItems(menu)
});

//* Listen for a filter button click
filterBtns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    // * Here's something new!!!
    // The dataset property lets us access the value of an html data attribute (we're calling ours "data-id")
    // In this case the "id" part of the string becomes a property on the dataset. 
    // Set the current category using the event and data-id of the button that was clicked.
    const category = e.currentTarget.dataset.id

    // Let's create a new filtered the array using our data-id value.
    const menuCategory = menu.filter(function(menuItem) {
      // Check the category of each menuItem
      if (menuItem.category === category) {
        return menuItem;
      } 
    });
    // Whenever a button is pressed, call the displayMenuItems function to render the menu. If 'all' is selected, pass the whole menu array, if a category button is selected, we're passing the filtered array. 
    if (category === 'all') {
      displayMenuItems(menu)
    } else {
      displayMenuItems(menuCategory)
    }
  })
});

// Function to generate the html string for all of our single menu items joined together.
function displayMenuItems(menuItems) {
    // map the array, returning a new array containing the html for each item.
    let displayMenu = menuItems.map(function(item) {
      return `
        <article class="menu-item">
          <img src=${item.img} class="photo" alt=${item.title}>
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
          </div>
        </article>
      `;
  });
    // Use the join method to add each item onto a string (and use the empty string in the parentheses to eliminate that , character that separates the array values)
  displayMenu = displayMenu.join('')
  // console.log(displayMenu);
  // Set the section html to that joined string.
  sectionCenter.innerHTML = displayMenu
}