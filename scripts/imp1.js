// Function to add item to the cart
function addToCart(name, imageSrc, price) {
    // Retrieve existing cart items or initialize an empty array
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item already exists in the cart
    const existingItemIndex = cart.findIndex(item => item.name === name);
    if (existingItemIndex !== -1) {
        // If item exists, increase its quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // If item does not exist, add as new item
        cart.push({
            name: name,
            imageSrc: imageSrc,
            price: price,
            quantity: 1
        });
    }

    // Update cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Optional: Alert user or redirect to cart page
    alert(`${name} has been added to your cart.`);
}

// Function to display cart items on cart.html
function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartGrid = document.getElementById("cart-grid");
    const subtotalElement = document.getElementById("subtotal");

    cartGrid.innerHTML = "";
    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        // Create a div for each cart item
        const div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
            <img src="${item.imageSrc}" alt="${item.name}" class="cart-item-image">
            <span class="cart-item-name">${item.name}</span>
            <div class="cart-item-quantity">
                <button class="quantity-button" onclick="updateQuantity(${index}, 'minus')">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-button" onclick="updateQuantity(${index}, 'plus')">+</button>
            </div>
            <span class="cart-item-price">Rs${item.price}</span>
            <span class="cart-item-total">Total: Rs${itemTotal}</span>
            <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
        `;

        cartGrid.appendChild(div);
    });

    subtotalElement.innerText = `Rs${subtotal.toFixed(2)}`;
}


// Function to update quantity in the cart
function updateQuantity(index, action) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (action === "plus") {
        cart[index].quantity += 1;
    } else if (action === "minus" && cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    }

    // Update cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Function to remove item from the cart
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);

    // Update cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Display cart items when cart.html loads
if (window.location.pathname.includes('cart.html')) {
    window.onload = displayCart;
}
