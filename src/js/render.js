// js/render.js
export function videoCardHTML(video) {
	return `
    <div class="video-card">
      <div class=".video-card__thumbnail-wrapper">
        <img class="video-card__thumbnail" src="${video.thumbnail}" alt="${video.title}" loading="lazy">
        <div class="video-card__duration" >${video.time}</div>
      </div>

      <div class="video-card__meta">
        <div class="channel-picture">
          <img class="video-card__avatar" tabindex="0" src="${video.icon}" alt="${video.author}">
        </div>

        <div class="video-card__text" >
          <p class="video-card__title" tabindex="0">
			<span class="video-card__title-text" >${video.title}</span>
		  </p>
				
          <p class="video-card__channel" tabindex="0">
			<span class="video-card__channel-text">${video.author}</span>
		  </p>
			
          <p class="video-card__stats">${video.stats}</p>
        </div>
        <button class="video-card__menu-btn" type="button" aria-label="More options" >
          <span class="material-symbols-outlined" >more_vert</span>
        </button>
      </div>
      
    </div>
  `;
}

export function skeletonCardHTML() {
	return `
    <div class="video-card video-card-skeleton">
      <div class="skeleton__thumbnail"></div>

      <div class="video-card__meta">
        <div class="skeleton__avatar"></div>

        <div class="video-text">
          <div class="skeleton__lines w-90"></div>
          <div class="skeleton__lines w-70"></div>
          <div class="skeleton__lines w-50"></div>
        </div>
      </div>
    </div>
  `;
}