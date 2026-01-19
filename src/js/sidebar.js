// js/sidebar.js

export function initSidebar() {
	const menuButton = document.querySelector(".menu-btn");
	const sidebar = document.querySelector(".sidebar");
	const Links = Array.from(sidebar.querySelectorAll(".sidebar__link"));

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

	let LastFocus = menuButton;
	document.addEventListener("focusin", (e) => {
		if (!sidebar.contains(e.target)) {
			LastFocus = e.target;
		}
	})

	function isOpen() {
		return menuButton.getAttribute("aria-expanded") === "true";
	}

	function TrapSidebarTab(e) {
		if (e.key !== 'Tab') return;
		if (!isOpen()) return;

		const active = document.activeElement;

		if (e.shiftKey && active === Links[0]) {
			e.preventDefault();
			Links[Links.length - 1].focus();
			return;
		}

		if (!e.shiftKey && active === Links[Links.length - 1]) {
			e.preventDefault();
			Links[0].focus();
			return;
		}
	}

	function setOpen(next) {
		menuButton.setAttribute("aria-expanded", String(next));
		sidebar.classList.toggle("sidebar--open", next);
		document.body.classList.toggle("sidebar--open", next);

		if (next) {
			Links[0].focus();
			sidebar.addEventListener("keydown", TrapSidebarTab);
		} else {
			sidebar.removeEventListener("keydown", TrapSidebarTab);
			LastFocus.focus();
		}
	}

	menuButton.addEventListener("click", () => setOpen(!isOpen()));

	return {
		isOpen,
		open: () => setOpen(true),
		close: () => setOpen(false),
		toggle: () => setOpen(!isOpen()),
	};
}