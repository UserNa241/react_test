// js/search.js
export function initSearch({sidebar} = {}) {
	const searchToggleBtn = document.querySelector(".mobile-search-toggle");
	const searchBackBtn = document.querySelector(".search-back-btn");
	const searchInput = document.querySelector(".search-bar");

	const content = document.querySelector(".content");
	const minibar = document.querySelector(".mini-sidebar");

	if (!searchToggleBtn || !searchBackBtn || !searchInput) {
		return {
			isOpen: () => false,
			open: () => {
			},
			close: () => {
			},
		};
	}

	function isOpen() {
		return document.body.classList.contains("search-open");
	}

	function open() {
		document.body.classList.add("search-open");
		searchToggleBtn.setAttribute("aria-expanded", "true");

		// close sidebar if provided
		sidebar.close();
		content.setAttribute("inert", "");
		minibar.setAttribute("inert", "");

		searchInput.focus();

	}

	function close() {
		document.body.classList.remove("search-open");
		searchToggleBtn.setAttribute("aria-expanded", "false");
		content.removeAttribute("inert");
		minibar.removeAttribute("inert");
		searchToggleBtn.focus();
	}

	searchToggleBtn.addEventListener("click", open);
	searchBackBtn.addEventListener("click", close);

	return {isOpen, open, close};
}