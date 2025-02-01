// Function to extract cart data
function extractCartData() {
  const cartItems = [];
  // Use DOM selectors to find cart items (adjust selectors based on Shoprite's HTML structure)
  document.querySelectorAll('.cart-item').forEach(item => {
    const name = item.querySelector('.item-name').innerText;
    const ingredients = item.querySelector('.item-ingredients')?.innerText || 'Unknown';
    cartItems.push({ name, ingredients });
  });
  return cartItems;
}

// Send cart data to the background script
chrome.runtime.sendMessage({ action: "cartData", data: extractCartData() });
