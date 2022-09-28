document.addEventListener("DOMContentLoaded", () => {
	let navElm = document.querySelector("nav");
	let menuButton = document.querySelector(".menu-button");

	menuButton.onclick = () => {
		const navElmStyle = getComputedStyle(navElm);
		menuButton.classList.toggle("close");
		navElmStyle.display == "block"
			? (navElm.style.display = "none")
			: (navElm.style.display = "block");
	};
});
