const sides = document.querySelectorAll('.area-input');
const AreaBtn = document.querySelector('#area-button');
const AreaOutput = document.querySelector('#area-output');
function calculateMultiplication(a, b) {
	const multiply = a * b ;
	return multiply;
}

function calculateArea() {
	const x = calculateMultiplication(sides[0].value, sides[1].value);
	const area = (x/2).toFixed(2);
	AreaOutput.innerText = "The Area of the Triangle is " + area+ " cm^2" ;
}

AreaBtn.addEventListener('click', calculateArea);