// js/minibar.js
import {initPressedGroup} from "./selection.js";

export function initMinibar() {
	const miniSidebar = document.querySelector(".mini-sidebar");
	if (!miniSidebar) return;

	initPressedGroup({
		container: miniSidebar,
		itemSelector: ".mini-link",
		activeClass: "mini-link-active",
	});
}