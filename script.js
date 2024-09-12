document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase(); // Convert the input to lowercase
    const items = document.querySelectorAll('#itemsList li'); // Select all list items

    items.forEach(function(item) {
        const itemName = item.textContent.toLowerCase(); // Convert item text to lowercase

        // Check if the item includes the search query
        if (itemName.includes(query)) {
            item.style.display = ''; // Show the item
        } else {
            item.style.display = 'none'; // Hide the item
        }
    });
});
