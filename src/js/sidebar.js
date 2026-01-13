// js/sidebar.js
import {initPressedGroup} from "./selection.js";

export function initSidebar() {
	const menuButton = document.querySelector(".menu-btn");
	const sidebar = document.querySelector(".sidebar");

	if (!menuButton || !sidebar) {
		return {
			isOpen: () => false,
			open: () => {
			},
			close: () => {
			},
			toggle: () => {
			},
		};
	}

	let lastFocus = null;

	function isOpen() {
		return menuButton.getAttribute("aria-expanded") === "true";
	}

	function setOpen(next) {
		// save last focus only if it is outside the sidebar
		const current = document.activeElement;
		if (!sidebar.contains(current)) lastFocus = current;

		menuButton.setAttribute("aria-expanded", String(next));
		sidebar.classList.toggle("open", next);
		document.body.classList.toggle("sidebar-open", next);

		if (next) {
			sidebar.querySelector(".sidebar-link")?.focus();
		} else {
			(lastFocus || menuButton).focus();
		}
	}

	menuButton.addEventListener("click", () => setOpen(!isOpen()));

	// active/pressed selection inside sidebar
	initPressedGroup({
		container: sidebar,
		itemSelector: ".sidebar-link",
		activeClass: "sidebar-link-active",
	});

	return {
		isOpen,
		open: () => setOpen(true),
		close: () => setOpen(false),
		toggle: () => setOpen(!isOpen()),
	};
}