// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = () => {

//     navbar.classList.toggle('active');

// }

// window.onscroll = () => {

//     navbar.classList.remove('active');

// }


let itemsSelected = [];

let itemList = [{name:chocolate-A, price:15, quantity:0}, 
    {name:chocolate-A, price:15, quantity:0}, 
    {name:chocolate-A, price:15, quantity:0}
]

function addItem(event){

     event.preventDefault()

     const item = event.target
     const itemId = item.getAttribute('data-id')
     itemList[data-id].quantity++;

     console.log(itemId)
}

// Define an array to store chocolates with their names and prices.
const chocolates = [
    { name: 'Dairy Milk Chocolate', price: 15.0 },
    { name: 'Snicker Chocolate', price: 15.0 },
    { name: 'Cadbury Chocolate', price: 15.0 },
    // Add more chocolates here
];

// Initialize the cart as an empty array to store selected chocolates.
const cart = [];

// Function to add a chocolate to the cart.
function addItem(event) {
    const chocolateId = event.target.getAttribute('data-id');
    const selectedChocolate = chocolates[parseInt(chocolateId) - 1]; // Subtract 1 to match array index.

    // Check if the selected chocolate is not already in the cart.
    if (!cart.includes(selectedChocolate)) {
        // Check if adding the chocolate won't exceed the limit of 8 items.
        if (cart.length < 8) {
            cart.push(selectedChocolate);
            updateCartUI();
        } else {
            alert('You cannot add more than 8 chocolates to your cart.');
        }
    } else {
        alert('This chocolate is already in your cart.');
    }
}

// Function to update the cart UI.
function updateCartUI() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Clear the cart list.

    // Calculate the total price and update the UI.
    let totalPrice = 0;
    for (const chocolate of cart) {
        const listItem = document.createElement('li');
        listItem.textContent = `${chocolate.name} - ₹${chocolate.price}`;
        cartList.appendChild(listItem);

        totalPrice += chocolate.price;
    }

    const totalItems = cart.length;
    const totalItemsElement = document.getElementById('total-items');
    const totalPriceElement = document.getElementById('total-price');

    totalItemsElement.textContent = `Total Items: ${totalItems}`;
    totalPriceElement.textContent = `Total Price: ₹${totalPrice.toFixed(2)}`;
}

// Add event listeners to "Add to Cart" buttons.
const addToCartButtons = document.querySelectorAll('.btn');
addToCartButtons.forEach((button) => {
    button.addEventListener('click', addItem);
});
