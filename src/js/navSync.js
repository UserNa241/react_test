//js/navSync.js

export function initNavSync() {
	const sidebar = document.getElementById('sidebar');
	const minibar = document.querySelector('.mini-sidebar');

	function setActiveIn(container, itemSelector, activeClass, id) {

		const current = container.querySelector("." + activeClass);

		if (current) {
			current.classList.remove(activeClass);
			current.setAttribute('aria-pressed', 'false');
		}
		if (!id) return;
		const next = container.querySelector(`${itemSelector}[data-id="${id}"]`);
		if (next) {
			next.classList.add(activeClass);
			next.setAttribute('aria-pressed', 'true');
		}
	}

	function setActiveEverywhere(id) {
		setActiveIn(sidebar, ".sidebar-link", "sidebar-link-active", id);

		const existsInMini = minibar.querySelector(`.mini-link[data-id="${id}"]`);

		if (existsInMini) {
			setActiveIn(minibar, ".mini-link", "mini-link-active", id);
		} else {
			setActiveIn(minibar, ".mini-link", "mini-link-active", null);
		}
	}

	sidebar.addEventListener('click', (e) => {
		const btn = e.target.closest('.sidebar-link');
		if (!btn) return;
		setActiveEverywhere(btn.dataset.id);
	});

	minibar.addEventListener("click", (e) => {
		const btn = e.target.closest(".mini-link");
		if (!btn) return;
		setActiveEverywhere(btn.dataset.id);
	});

	const initialSidebarActive = sidebar.querySelector(".sidebar-link-active");
	setActiveEverywhere(initialSidebarActive.dataset.id);

}