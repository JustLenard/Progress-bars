const allBarFills = document.querySelectorAll('.filling');
const allButtons = document.querySelectorAll('.button');
const fillFull = document.querySelector('#fill-full');
const reset = document.querySelector('#reset');

// If I put lower values, problems with the font appear and I have not time to deal with it.
const arr = [20, 30, 40, 50, 60, 70, 80, 90, 100];

// Assigning random fullness to the bars
function asignFullness() {
	allBarFills.forEach(barFill => {
		barFill.style.width = `${arr[Math.floor(Math.random() * arr.length)]}%`;
		barFill.textContent = barFill.style.width;
	});
}
asignFullness();

// Increasing bar fullnes on button click
allButtons.forEach(button => {
	button.addEventListener('click', () => {
		let color = button.className.split('-')[1];
		handleClick(color);
	});
});

// Fill every bar to 100%
fillFull.addEventListener('click', () => {
	allBarFills.forEach(barFill => {
		barFill.style.width = '100%';
		barFill.textContent = barFill.style.width;
	});
});

// Reset
reset.addEventListener('click', () => {
	asignFullness();
});

//
function handleClick(color) {
	for (let i = 0; i < allBarFills.length; i++) {
		if (allBarFills[i].classList.contains(color)) {
			let widthValue = 10 + Number(allBarFills[i].style.width.slice(0, -1));
			if (widthValue < 101) {
				allBarFills[i].style.width = widthValue + '%';
				allBarFills[i].textContent = allBarFills[i].style.width;
			}
		}
	}
}
