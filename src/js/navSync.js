//js/navSync.js

export function initNavSync() {
	const sidebar = document.getElementById('sidebar');
	const minibar = document.querySelector('.mini-sidebar');

	if (!sidebar || !minibar) return;

	function setActiveIn(container, itemSelector, id) {

		container
			.querySelectorAll(`${itemSelector}[aria-pressed="true"]`)
			.forEach((btn) => btn.setAttribute("aria-pressed", "false"));

		if (!id) return;

		const next = container.querySelector(`${itemSelector}[data-id="${id}"]`);
		if (next) next.setAttribute('aria-pressed', 'true');
	}

	function setActiveEverywhere(id) {
		setActiveIn(sidebar, ".sidebar-link", id);

		const existsInMini = minibar.querySelector(`.mini-link[data-id="${id}"]`);

		if (existsInMini) {
			setActiveIn(minibar, ".mini-link", id);
		} else {
			setActiveIn(minibar, ".mini-link", null);
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

	const initial = sidebar.querySelector('.sidebar-link[aria-pressed="true"]');

	if (initial) setActiveEverywhere(initial.dataset.id);

}