export function initCategory() {
	const categoryBar = document.querySelector(".category-bar");
	const categoryList = document.querySelector(".category-list");
	if (!categoryBar || !categoryList) return;

	categoryList.addEventListener("click", (e) => {
		const btn = e.target.closest(".category-button");
		if (!btn) return;

		const active = categoryList.querySelector('.category-button[aria-pressed="true"]');
		if (active) {
			active.setAttribute('aria-pressed', "false");
		}
		btn.setAttribute("aria-pressed", "true");
	});
}