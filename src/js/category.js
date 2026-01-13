// js/category.js
import {initPressedGroup} from "./selection.js";

export function initCategory() {
	const categoryBar = document.querySelector(".category-bar");
	if (!categoryBar) return;

	// event delegation fixes your earlier “active button loses listener” issue
	initPressedGroup({
		container: categoryBar,
		itemSelector: "button",
		activeClass: "category-button-active",
	});
}