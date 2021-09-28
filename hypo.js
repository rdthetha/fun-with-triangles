const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypo-button');
const hypotenuseOutput = document.querySelector('#hypo-output');
function calculateSumOfSquares(a, b) {
	const sumOfSquares = a * a + b * b;
	return sumOfSquares;
}

function calculateHypotenuse() {
	const sumOfSquares = calculateSumOfSquares(sides[0].value, sides[1].value);
	const lengthOfHypotenuse = Math.sqrt(sumOfSquares).toFixed(2);
	hypotenuseOutput.innerText = "The length of the hypotenuse is " + lengthOfHypotenuse+ "cm" ;
}

hypotenuseBtn.addEventListener('click', calculateHypotenuse);