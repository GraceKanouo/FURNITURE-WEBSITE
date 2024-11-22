document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchIcon = document.getElementById('search-icon');

    
    const performSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        const items = document.querySelectorAll('.products-icons span, .pricing-card h3');

        if (!query) {
            alert('Please enter a search query.');
            return;
        }

        let found = false;
        let firstMatch = null; 

        items.forEach(item => {
            if (item.textContent.toLowerCase().includes(query)) {
                item.style.backgroundColor = '#ffffa1'; 
                if (!firstMatch) firstMatch = item; 
                found = true;
            } else {
                item.style.backgroundColor = ''; 
            }
        });

        if (found) {
           
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            alert(`No results found for "${query}".`);
        }
    };

    
    searchIcon.addEventListener('click', performSearch);

    
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
});
