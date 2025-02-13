document.addEventListener('DOMContentLoaded', function() {
    const storyContainer = document.getElementById('story-container');
    const loadingIndicator = document.getElementById('loading-indicator');
    let page = 1; // Starting page for loading content
    let loading = false; // Flag to prevent multiple simultaneous loads

    const imageURLs = [ // Replace with your actual image URLs and captions
        { url: 'images/love1.jpg', caption: 'Our first adventure together.' },
        { url: 'images/love2.jpg', caption: 'Exploring new places, hand in hand.' },
        { url: 'images/love3.jpg', caption: 'Everyday moments become memories.' },
        { url: 'images/love1.jpg', caption: 'More memories to come...' },
        { url: 'images/love2.jpg', caption: 'And even more love to share.' },
        { url: 'images/love3.jpg', caption: 'Our journey is just beginning.' },
        // ... add as many as you want
    ];

    function createStoryItem(imageURL, captionText) {
        const item = document.createElement('div');
        item.classList.add('story-item');
        const img = document.createElement('img');
        img.src = imageURL;
        img.alt = captionText; // Alt text for accessibility
        const caption = document.createElement('p');
        caption.classList.add('caption');
        caption.textContent = captionText;
        item.appendChild(img);
        item.appendChild(caption);
        return item;
    }

    function loadMoreContent() {
        if (loading) return; // Prevent loading if already in progress
        loading = true;
        loadingIndicator.style.display = 'block'; // Show loading indicator

        setTimeout(() => { // Simulate loading delay (replace with actual data fetching if needed)
            loadingIndicator.style.display = 'none'; // Hide loading indicator after simulated delay
            let itemsToLoad = 3; // Load 3 items per scroll for example
            for (let i = 0; i < itemsToLoad; i++) {
                if (imageURLs.length > 0) {
                    const imageData = imageURLs.shift(); // Get and remove the first item
                    const storyItem = createStoryItem(imageData.url, imageData.caption);
                    storyContainer.appendChild(storyItem);
                } else {
                    // No more images to load (optional: display "End of Story" message)
                    loadingIndicator.textContent = "The End of Our Beautiful Story So Far...";
                    loadingIndicator.style.display = 'block';
                    window.removeEventListener('scroll', handleScroll); // Stop listening for scroll
                    break; // Exit loop if no more images
                }
            }
            loading = false;
            page++;
        }, 1000); // Simulated 1-second loading time, adjust as needed
    }

    function handleScroll() {
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollThreshold = 200; // Load more content when 200px from the bottom

        if (documentHeight - windowHeight - scrollTop < scrollThreshold) {
            loadMoreContent();
        }
    }

    // Initial Load - load some content on page load
    loadMoreContent();

    // Event listener for scroll to load more content
    window.addEventListener('scroll', handleScroll);
});
