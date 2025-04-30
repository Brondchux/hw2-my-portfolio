document.querySelectorAll('.home-tab').forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		window.location.href = 'index.html';
	});
});

function getCurrentYear() {
	let date = new Date();
	return date.getFullYear();
}

function displayCurrentYear() {
	let currentYear = document.getElementById("currentYear");
	currentYear && (currentYear.textContent = `2021 - ${getCurrentYear()}`);
}

displayCurrentYear();
