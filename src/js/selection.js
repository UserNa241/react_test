// js/selection.js
export function initPressedGroup({container, itemSelector, activeClass}) {
	if (!container) return;

	container.addEventListener("click", (e) => {
		const btn = e.target.closest(itemSelector);
		if (!btn || !container.contains(btn)) return;

		const active = container.querySelector(`.${activeClass}`);
		if (active && active !== btn) {
			active.classList.remove(activeClass);
			active.setAttribute("aria-pressed", "false");
		}

		btn.classList.add(activeClass);
		btn.setAttribute("aria-pressed", "true");
	});
}