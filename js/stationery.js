// ✅ স্টেশনারি প্রোডাক্ট লিস্ট
const stationeryProducts = [
  {
    title: "Df Pen",
    image: "../images/Df_Pen.jpg",
    price: "50",
    mrp: "70",
    discount: "29% off",
    rating: "4.5 ⭐",
  },
  {
    title: "Ball Pen Set",
    image: "../images/pen.jpg",
    price: "120",
    mrp: "150",
    discount: "20% off",
    rating: "4.3 ⭐",
  },
];

// ✅ অ্যাকসেসরিজ প্রোডাক্ট লিস্ট
const accessoriesProducts = [
  {
    title: "Bluetooth Earphones",
    image: "../images/earphones.jpg",
    price: "999",
    mrp: "1299",
    discount: "23% off",
    rating: "4.6 ★",
  },
  {
    title: "Laptop Bag",
    image: "../images/bag.jpg",
    price: "799",
    mrp: "999",
    discount: "20% off",
    rating: "4.4 ★",
  },
];

// ✅ showProducts ফাংশন – category অনুযায়ী দেখায়
function showProducts(category) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  let products = [];

  if (category === "stationery") {
    products = stationeryProducts;
  } else if (category === "accessories") {
    products = accessoriesProducts;
  }

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-item-card";

    card.innerHTML = `
      <img src="${product.image}" class="product-image" />
      <h3 class="product-title">${product.title}</h3>
      <div class="product-price">
        ₹${product.price}
        <span class="mrp">₹${product.mrp}</span>
        <span class="discount">${product.discount}</span>
      </div>
      <div class="product-rating">Rating: ${product.rating}</div>
      <button class="add-to-cart">Add to Cart</button>
    `;

    container.appendChild(card);
  });
}
