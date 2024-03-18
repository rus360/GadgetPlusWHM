function fetchProductDetails(barcode) {
    // Mock product details
    var products = {
        "123456789": { name: "Product A", price: 10.99 },
        "987654321": { name: "Product B", price: 15.99 },
        // Add more product details as needed
    };
    
    // Check if the barcode exists in the mock product data
    if (barcode in products) {
        return products[barcode];
    } else {
        return null; // Product not found
    }
}


// Function to update the product list on the webpage
function updateProductList(productDetails) {
    if (productDetails) {
        var productList = document.getElementById("products");
        
        // Create a new list item for the scanned product
        var listItem = document.createElement("li");
        listItem.textContent = productDetails.name + " - $" + productDetails.price.toFixed(2);
        
        // Append the new list item to the product list
        productList.appendChild(listItem);
    } else {
        alert("Product not found!"); // Show an alert if the product details are not found
    }
}
</script>
</body>
</html>
