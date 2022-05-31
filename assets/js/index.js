function getCurrentYear() {
	let date = new Date();
	return date.getFullYear();
}

function displayCurrentYear() {
	let currentYear = document.getElementById("currentYear");
	currentYear && (currentYear.textContent = getCurrentYear());
}

displayCurrentYear();
