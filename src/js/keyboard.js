// js/keyboard.js
export function initKeyboard({sidebar, search}) {
	const backdrop = document.querySelector(".backdrop");

	function closePriority() {
		if (search?.isOpen?.()) {
			search.close();
			return;
		}
		if (sidebar?.isOpen?.()) {
			sidebar.close();
		}
	}

	document.addEventListener("keydown", (e) => {
		if (e.key !== "Escape") return;
		closePriority();
	});

	backdrop?.addEventListener("click", closePriority);
}