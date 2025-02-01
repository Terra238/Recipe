chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "cartData") {
    // Send cart data to the backend
    fetch("http://localhost:5000/process-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message.data),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Backend response:", data);
      })
      .catch(error => {
        console.error("Error sending data to backend:", error);
      });
  }
});
