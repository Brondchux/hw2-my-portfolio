function getCurrentYear() {
	let date = new Date();
	return date.getFullYear();
}

function displayCurrentYear() {
	let currentYear = document.getElementById("currentYear");
	currentYear && (currentYear.textContent = `2021 - ${getCurrentYear()}`);
}

displayCurrentYear();
