const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
	'1': ' '

};


function realize(value) {
	let x = value.split('');
	let result = "";
	let counter = 0;

	for (let i = 1; i <= x.length; i++) {
		counter++;

		if (+x[i] === 1 && +x[i - 1] === 1) {
			result += '-';
			x[i] = 0;
		} else if (+x[i] === 0 && +x[i - 1] === 1) {
			x[i] = 0;
			result += '.';
		} else if (x[i] === '*' && x[i - 9] === '*') {
			result += '1';

		}

		if (counter === 10 && i != x.length) {
			counter = 0;
			result += 0;
		}


	}

	return result.split('0')
}

function decode(item) {

	let x = realize(item);
	let result = "";
	let y = [];
	x.forEach(elem => {
		y.push(elem.split('|'));

	});

	let z = y.flat();

	z.forEach(elem => {
		result += `${MORSE_TABLE[elem]}`
		console.log(MORSE_TABLE[elem]);
	});
	return result;
}

module.exports = {
	decode
}