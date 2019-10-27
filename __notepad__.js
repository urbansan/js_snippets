// console.log(Object.getOwnPropertyNames(products))
// console.log(Object.getOwnPropertyNames(Object))
// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(products)))

const greet = () => console.log('hello world');

// greet()

products = [
	100,
	200,
	300
];

const bill = (products, tax) => {
	let total = 0;
	for(let i = 0; i < products.length; i++){
		total += products[i] + products[i] * tax;
	}
	return total;
}


products.forEach((el, i) => console.log(el, i))
const bill2 = (products, tax) => {
	let total = 0;
	products.forEach((el, i) => {
		total += el + el*tax
		console.log(el, i, total, tax)
	})
	return total;
}

console.log(bill(products, 0.23))
console.log(bill2(products, 0.23))


const siema = (callback, b, c) => {
	let i = 50;
	callback(i, b, c);
};

const callback_func = (a, b, c) => {
	console.log(a, b, c);
};

siema(callback_func, 'mialem', 'hadouken');


let hadouken = {
	'shit': 10,
	'mit': 'wiem'
};

let whateva = hadouken

console.log(whateva);
whateva = {
	'other': 'shit',
	'mit': 'wiem'
};

console.log(hadouken);
console.log(whateva);

