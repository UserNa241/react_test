const menuButton = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

function isExpanded() {
	return menuButton.getAttribute('aria-expanded') === 'true';
}

function setExpanded(next) {
	menuButton.setAttribute('aria-expanded', String(next));
	sidebar.classList.toggle('open', next);
	document.body.classList.toggle('sidebar-open', next);
}

if (menuButton && sidebar) {

	menuButton.addEventListener('click', () => {
		setExpanded(!isExpanded());
	});

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') setExpanded(false);
	});
}


//Sidebar-Selection
const sideBar = document.querySelectorAll('.sidebar-link');

sideBar.forEach((btn) => {
	btn.addEventListener('click', () => {
		const active = document.querySelector('.sidebar-link-active');

		if (active) {
			active.classList.remove('sidebar-link-active');
			active.setAttribute('aria-pressed', 'false');
		}

		btn.classList.add('sidebar-link-active');
		btn.setAttribute('aria-pressed', 'true');

	})
});

const miniBar = document.querySelectorAll('.mini-link');

miniBar.forEach((btn) => {
	btn.addEventListener('click', () => {
		const active = document.querySelector('.mini-link-active');

		if (active) {
			active.classList.remove('mini-link-active');
			active.setAttribute('aria-pressed', 'false');
		}

		btn.classList.add('mini-link-active');
		btn.setAttribute('aria-pressed', 'true');
	});
});

const categoryButton = document.querySelectorAll('.category-button');

categoryButton.forEach((btn) => {
	btn.addEventListener('click', () => {

		const active = document.querySelector('.category-button-active');

		if (active) {
			active.classList.remove('category-button-active');
			active.setAttribute('aria-pressed', 'false');
		}

		btn.classList.add('category-button-active');
		btn.setAttribute('aria-pressed', 'true');
	})
});

const gridContainer = document.querySelector('.video-grid');

// 1) Real card (matches videoDB keys + your CSS structure)
function videoCardHTML(video) {
	return `
    <div class="video-card">
      <div class="thumbnail-container">
        <img class="thumbnail" src="${video.thumbnail}" alt="${video.title}" loading="lazy">
        <div class="video-time">${video.time}</div>
      </div>

      <div class="video-info-grid">
        <div class="channel-picture">
          <img class="profile-icon" src="${video.icon}" alt="${video.author}">
        </div>

        <div class="video-text">
          <p class="video-title">${video.title}</p>
          <p class="video-author">${video.author}</p>
          <p class="video-stats">${video.stats}</p>
        </div>
      </div>
    </div>
  `;
}

// 2) Skeleton card (class names match your CSS: w90/w70/w50)
function skeletonCardHTML() {
	return `
    <div class="video-card video-card-skeleton">
      <div class="skeleton-thumbnail"></div>

      <div class="video-info-grid">
        <div class="skeleton-avatar"></div>

        <div class="video-text">
          <div class="skeleton-lines w90"></div>
          <div class="skeleton-lines w70"></div>
          <div class="skeleton-lines w50"></div>
        </div>
      </div>
    </div>
  `;
}

// 3) State
const BATCH_SIZE = 8;
let cursor = 0;
let isLoading = false;

// 4) Render helpers
function renderSkeletons(count) {
	gridContainer.innerHTML = Array.from({length: count}, skeletonCardHTML).join('');
}

function renderVideosReplace(videos) {
	gridContainer.innerHTML = videos.map(videoCardHTML).join('');
}

function renderVideosAppend(videos) {
	gridContainer.insertAdjacentHTML('beforeend', videos.map(videoCardHTML).join(''));
}

// 5) Loader
function loadNextBatch(initial = false) {
	if (isLoading) return;
	isLoading = true;

	if (initial) renderSkeletons(BATCH_SIZE);

	setTimeout(() => {
		const batch = videoDB.slice(cursor, cursor + BATCH_SIZE);

		if (batch.length === 0) {
			isLoading = false;
			return;
		}

		if (initial) renderVideosReplace(batch);
		else renderVideosAppend(batch);

		cursor += batch.length;
		isLoading = false;
	}, 800);
}

// 6) Infinite scroll (sentinel + observer)
const sentinel = document.createElement('div');
sentinel.className = 'scroll-sentinel';
gridContainer.insertAdjacentElement('afterend', sentinel);

const observer = new IntersectionObserver(
	(entries) => {
		if (entries[0].isIntersecting) loadNextBatch(false);
	},
	{root: null, rootMargin: '600px 0', threshold: 0}
);

observer.observe(sentinel);

// 7) Initial load
loadNextBatch(true);