// js/focus.js
export function initFocus() {
	const sidebarLinks = document.querySelectorAll(".sidebar .sidebar-link");
	const logo = document.querySelector(".logo-container a");
	const lastLink = sidebarLinks[sidebarLinks.length - 1];

	if (!lastLink || !logo) return;

	lastLink.addEventListener("keydown", (e) => {
		if (e.key !== "Tab") return;
		if (e.shiftKey) return;
		if (!document.body.classList.contains("sidebar-open")) return;

		e.preventDefault();
		logo.focus();
	});
}