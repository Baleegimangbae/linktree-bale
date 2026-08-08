const cart = [];

const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalPrice = document.getElementById("totalPrice");

cartBtn.addEventListener("click", () => {
  cartModal.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cartModal.classList.remove("active");
});

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price;

    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${item.name}</strong><br>
      Rp ${item.price.toLocaleString('id-ID')}
    `;

    cartItems.appendChild(li);
  });

  cartCount.textContent = cart.length;
  totalPrice.textContent = total.toLocaleString("id-ID");
}

function checkout() {
  if (cart.length === 0) {
    alert("Keranjang masih kosong 😅");
    return;
  }

  let message = "Halo, saya ingin membeli:%0A%0A";
  let total = 0;

  cart.forEach(item => {
    message += `• ${item.name} - Rp ${item.price.toLocaleString('id-ID')}%0A`;
    total += item.price;
  });

  message += `%0ATotal: Rp ${total.toLocaleString('id-ID')}`;

  // ganti dengan nomor WhatsApp kamu
  const phone = "628152312658";

  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}