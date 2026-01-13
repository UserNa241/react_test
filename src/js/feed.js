// js/feed.js
import {skeletonCardHTML, videoCardHTML} from "./render.js";

export function initFeed(videoDB) {
	const grid = document.querySelector(".video-grid");
	if (!grid) return;

	const BATCH_SIZE = 15;
	let cursor = 0;
	let isLoading = false;

	function renderSkeletons(count) {
		grid.innerHTML = Array.from({length: count}, skeletonCardHTML).join("");
	}

	function renderReplace(videos) {
		grid.innerHTML = videos.map(videoCardHTML).join("");
	}

	function renderAppend(videos) {
		grid.insertAdjacentHTML("beforeend", videos.map(videoCardHTML).join(""));
	}

	function getBatch() {
		return Array.from({length: BATCH_SIZE}, (_, i) => {
			return videoDB[(cursor + i) % videoDB.length];
		});
	}

	function loadNextBatch(initial = false) {
		if (isLoading) return;
		if (!videoDB?.length) return;

		isLoading = true;

		if (initial) renderSkeletons(BATCH_SIZE);

		setTimeout(() => {
			const batch = getBatch();

			if (initial) renderReplace(batch);
			else renderAppend(batch);

			cursor = (cursor + BATCH_SIZE) % videoDB.length;
			isLoading = false;
		}, 100);
	}

	const sentinel = document.createElement("div");
	sentinel.className = "scroll-sentinel";
	grid.insertAdjacentElement("afterend", sentinel);

	const observer = new IntersectionObserver(
		(entries) => {
			if (entries[0]?.isIntersecting) loadNextBatch(false);
		},
		{root: null, rootMargin: "600px 0px", threshold: 0}
	);

	observer.observe(sentinel);

	loadNextBatch(true);
}