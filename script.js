document.addEventListener('DOMContentLoaded', () => {
    // Navigation menu interactions
    const navItems = document.querySelectorAll('.navigation li');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            navItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
        });
    });

    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');

    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value;
        if (searchTerm) {
            alert(`Searching for: ${searchTerm}`);
            // In a real app, you'd implement actual search functionality
        }
    });

    // View tabs interaction
    const viewTabs = document.querySelectorAll('.view-tabs span');
    viewTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            viewTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
        });
    });

    // Place card hover effects
    const placeCards = document.querySelectorAll('.place-card');
    placeCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});