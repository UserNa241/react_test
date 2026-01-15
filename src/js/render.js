// js/render.js
export function videoCardHTML(video) {
	return `
    <div class="video-card">
      <div class="thumbnail-container">
        <img class="thumbnail" src="${video.thumbnail}" alt="${video.title}" loading="lazy">
        <div class="video-time" >${video.time}</div>
      </div>

      <div class="video-info-grid">
        <div class="channel-picture">
          <img class="profile-icon" tabindex="0" src="${video.icon}" alt="${video.author}">
        </div>

        <div class="video-text">
          <p class="video-title" tabindex="0">${video.title}</p>
          <p class="video-author">${video.author}</p>
          <p class="video-stats">${video.stats}</p>
        </div>
        <button class="video-menu-btn" type="button" aria-label="More options">
          <span class="material-symbols-outlined" aria-hidden="true">more_vert</span>
        </button>
      </div>
      
    </div>
  `;
}

export function skeletonCardHTML() {
	return `
    <div class="video-card video-card-skeleton">
      <div class="skeleton-thumbnail"></div>

      <div class="video-info-grid">
        <div class="skeleton-avatar"></div>

        <div class="video-text">
          <div class="skeleton-lines w-90"></div>
          <div class="skeleton-lines w-70"></div>
          <div class="skeleton-lines w-50"></div>
        </div>
      </div>
    </div>
  `;
}