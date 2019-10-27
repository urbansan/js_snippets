// import('./gen.js')
// .then(value =>{
// 	console.log(value)
// })

// console.log({gen})

import { info } from './gen.js';


const tableRow = columns => {
	
	let temp_row = '';
	for(let idx in columns){
		temp_row += `    <td>${columns[idx]}</td>\n`
	};

	temp_row = `<tr>\n${temp_row}</tr>\n`

	return temp_row
};

const tableHeader = columns => {
		
	let header = '';
	const keys = Object.keys(columns);
	for(let idx in keys){
		header += `\t<th>${keys[idx]}</th>\n`
	};

	header = `<tr>\n${header}</tr>\n`

	return header
}

const generateTableHTML = data => {
	let rows = '';
	rows += tableHeader(data[0]);
	for(let idx in data){
		rows += tableRow(data[idx]);
	};
	let table = `<table>${rows}</table>`;

	return table
}

// class Table{
// 	constructor(data){
// 		this.data = data
// 	}

// 	generate(){

// 	}


// }
var xhr = new XMLHttpRequest();


xhr.onload = function () {
	if (this.status >= 200 && this.status < 300) {

		let table_div = document.getElementById('ajax_table');
		let data = JSON.parse(this.responseText)
		table_div.innerHTML = generateTableHTML(data);
		console.log('page updated')
	} else {
		console.log('The request failed!');
	}
};


xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();
