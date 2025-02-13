document.addEventListener('DOMContentLoaded', function() {
    const storyContainer = document.getElementById('story-container');
    const loadingIndicator = document.getElementById('loading-indicator');
    let loading = false;

    const imageURLs = [
        { url: 'images/love1.jpg', caption: 'Our first adventure together.' },
        { url: 'images/love2.jpg', caption: 'Exploring new places, hand in hand.' },
        { url: 'images/love3.jpg', caption: 'Everyday moments become memories.' },
        { url: 'images/love4.jpg', caption: 'More memories to come...' },
        { url: 'images/love5.jpg', caption: 'And even more love to share.' },
        { url: 'images/love6.jpg', caption: 'Our journey is just beginning.' }
    ];

    function createStoryItem(imageURL, captionText) {
        const item = document.createElement('div');
        item.classList.add('story-item');

        const img = document.createElement('img');
        img.src = imageURL;
        img.alt = captionText;

        const caption = document.createElement('p');
        caption.classList.add('caption');
        caption.textContent = captionText;

        item.appendChild(img);
        item.appendChild(caption);

        return item;
    }

    function loadMoreContent() {
        if (loading) return;
        loading = true;
        loadingIndicator.style.display = 'block';

        setTimeout(() => {
            loadingIndicator.style.display = 'none';

            let itemsToLoad = 3;
            for (let i = 0; i < itemsToLoad; i++) {
                if (imageURLs.length > 0) {
                    const imageData = imageURLs.shift();
                    const storyItem = createStoryItem(imageData.url, imageData.caption);
                    storyContainer.appendChild(storyItem);
                } else {
                    loadingIndicator.textContent = "The End of Our Beautiful Story So Far...";
                    loadingIndicator.style.display = 'block';
                    window.removeEventListener('scroll', handleScroll);
                    break;
                }
            }
            loading = false;
        }, 1000);
    }

    function handleScroll() {
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollThreshold = 200;

        if (documentHeight - windowHeight - scrollTop < scrollThreshold) {
            loadMoreContent();
        }
    }

    loadMoreContent();
    window.addEventListener('scroll', handleScroll);
});

