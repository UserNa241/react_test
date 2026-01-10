const menuButton = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

if (menuButton && sidebar) {
    menuButton.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        document.body.classList.toggle('sidebar-open');
    });
    menuButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === '') {
            menuButton.click();
        }
    })
}

const sideBar = document.querySelectorAll('.sidebar-link');
sideBar.forEach((button) => {
    button.addEventListener('click', () => {
        const activeCategory = document.querySelector('.sidebar-link-active');
        if (activeCategory) {
            activeCategory.classList.remove('sidebar-link-active');
        }
        button.classList.add('sidebar-link-active');
    })
})

const categoryButton=document.querySelectorAll('.category-button');
categoryButton.forEach(btn => {
    btn.addEventListener('click', () => {
        const currentActive = document.querySelector('.category-button-active');
        if (currentActive) {
            currentActive.classList.remove('category-button-active');
        }
        btn.classList.add('category-button-active');
    });
});

const gridContainer = document.querySelector('.video-grid');
// 1. Create a variable to hold the HTML code
let htmlCode = '';

// 2. Loop through the data
videoDB.forEach(video => {

    // 3. Add to the variable (NOT the page yet)
    htmlCode += `
        <div class="video-card">
            <div class="thumbnail-container">
                <!-- We will add the Lazy Loading fix here in a second -->
                <img class="thumbnail" src="${video.thumbnail}" alt="Video" loading="lazy">
                <div class="video-time">${video.time}</div>
            </div>
            <div class="video-info-grid">
                <div class="channel-picture">
                    <img class="profile-icon" src="${video.icon}" alt="Channel">
                </div>
                <div class="video-text">
                    <p class="video-title">${video.title}</p>
                    <p class="video-author">${video.author}</p>
                    <p class="video-stats">${video.stats}</p>
                </div>
            </div>
        </div>
    `;
});

// 4. Update the page ONLY ONCE
gridContainer.innerHTML = htmlCode;