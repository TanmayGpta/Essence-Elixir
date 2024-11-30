function generateProductCards(products) {
    const container = document.querySelector(".items");
    console.log(container.innerHTML)
    if (!container) {
        console.error("Error: #product-container not found in the DOM.");
        return;
    }
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">
                <a href="${product.url}">
                    <img src="${product.img}" alt="${product.name}">
                </a>
            </div>
            <div class="product-details">
                <h2>${product.name}</h2>
                <p class="sub-text">${product.category}</p>
                <div class="rating">
                    <span class="star">&#9733;
                        <p>${product.rating}</p>
                    </span>
                    <span class="verified">&#10004;
                        <p>${product.reviews}</p>
                    </span>
                </div>
                <div class="product_cost">
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                    <p>${product.cost} Rs</p>
                </div>
            </div>
            <button onclick="addToCart('${product.name}', '${product.img}', ${product.cost})" class="add-to-cart">ADD TO CART</button>
        `;
        
        container.appendChild(card);
    });
}


const start = 9;

const isInSubfolder = window.location.pathname.includes('/pages/'); 

const jsonPath = isInSubfolder ? '../main.json' : './main.json';
const imageBasePath = isInSubfolder ? '../assets/' : './assets/';
fetch(jsonPath)
    .then(response => response.json())
    .then(data => {
        const productsToDisplay = data.slice(start, start + 9);
        
        data.forEach(main => {
            
            main.img = imageBasePath + main.img.replace('./assets/', '');
        });

        generateProductCards(productsToDisplay);
    })

document.addEventListener("DOMContentLoaded", () => {
    // generateProductCards(products);
});