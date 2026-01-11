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

function videoCardHTML(video) {
	return `

    <div class="video-card">
        <img class="thumbnail" src="${video.thumbnail}" alt="${video.name}"/>

        <div class="video-info-grid">
            <img class="profile-icon" src="${video.profilePic}" alt="${video.author}"/>
        <div class="video-text">
        <p class="video-title"> ${video.title} </p>
        <p class="video-author"> ${video.author}</p>
        <p class="video-stats"> ${video.views} • ${video.timestamp}</p>
        </div>
        </div>
    </div>
`;
}

function SkeletonHTML() {
	return `
    <div class="video-card video-card-skeleton">
    <div class="skeleton-thumbnail"></div>
    
    <div class="video-info-grid">
		<div class="skeleton-avatar"></div>
	
		<div class="video-stats">
		<div class="skeleton-lines w-90"></div>
		<div class="skeleton-lines w-70"></div>
		<div class="skeleton-lines w-50"></div>
	</div>   
	</div>
	</div>
`;
}

const BATCH_SIZE = 8;
let cursor = 0;
let isLoading = false;

function renderSkeleton(count) {
	gridContainer.innerHTML = Array.from({length: count}, () => SkeletonHTML()).join('');
}

function renderVideosReplace(videos) {
	gridContainer.innerHTML = videos.map(videoCardHTML).join('');
}

function renderVideosAppend(videos) {
	gridContainer.innerAdjacentHTML('beforeend', videos.map(videoCardHTML).join(''));
}

function loadNextBatch(initial = false) {
	if (isLoading) return;
	isLoading = true;

	if (initial) {
		renderSkeleton(initial);
	}

	setTimeout(() => {
		const Batch = videoDB.slice(cursor, cursor + BATCH_SIZE);

		if (Batch.length === 0) {
			isLoading = false;
			return;
		}

		if (initial) {
			renderVideosReplace(initial);
		} else {
			renderVideosAppend(initial);
		}

		cursor += BATCH_SIZE;

		isLoading = false;
	}, 800)
}

const sentinel = document.getElementById('div');
sentinel.className = 'scroll-sentinel';

gridContainer.insertAdjacentElement('afterend', sentinel);

const observer = new IntersectionObserver(
	(entries) => {
		const entry = entries[0];
		if (entry.isIntersecting) {
			loadNextBatch(false);
		}
	},
	{
		root: null,
		rootMargin: '600px 0',
		threshold: 0
	}
);

observer.observe(sentinel);
loadNextBatch(true);
