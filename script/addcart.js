
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    const container = document.getElementById("cartItems");

    if (cart.length === 0) {
        container.innerHTML = `<p class="empty-msg">Your cart is empty 😔</p>`;
        return;
    }

    container.innerHTML = cartOptions.map((item, index) => `
      <div class="cart-item">
        <img src="${item.image}">
        <div class="cart-item-info">
          <h3>${item.name}</h3>
          <p>Price: ₹${item.price}</p>
          <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        </div>
      </div>
    `).join("") + `
      <button class="checkout-btn">Proceed to Checkout</button>
    `;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

renderCart();