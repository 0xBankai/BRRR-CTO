document.addEventListener("DOMContentLoaded", function () {
	const counterDisplay = document.querySelector(".counter-display");
	const printButton = document.getElementById("print-button");

	const clickSound = new Audio("/trimer.m4a");

	let count = 0;

	printButton.addEventListener("click", function () {
		count++;

		counterDisplay.textContent = `TOTAL PRINTED: $${count}`;

		clickSound.pause();
		clickSound.currentTime = 0;
		clickSound.play();
	});
});
