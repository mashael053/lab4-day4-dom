

let dynamic = document.getElementById ("dynamically-Number")


let container = document.getElementById(("dynamically-Number"));

let row = 0;
function mouseover(event) {
	const number = parseInt(event.target.textContent);
	let info = "";
	if (number % 2 === 0) {
		info += 'Even ';
	} else {
		info += 'Odd ';
	}
	if (isPrime(number)) {
		info += 'Prime';
	}
	event.target.setAttribute('title', info);
}

function isPrime(num) {
	if (num <= 1) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

for (let i = 0; i <= 100; i++) {

	let addnum = document.createElement('div');
	addnum.className = 'addnum';
	addnum.innerHTML = ` ${i}`;
	addnum.style.width = '14vw';
	addnum.style.height = '14vh';
	addnum.style.border = '1px solid white';


	if (i % 2 == 0) {
		addnum.style.backgroundColor = "green";
	} else if (i % 2 == 1) {
		addnum.style.backgroundColor = "yellow";
	}

	if (isPrime(i)) {
		addnum.style.backgroundColor = "red";
	}
	addnum.addEventListener('mouseover', mouseover);
	container.appendChild(addnum);

}


