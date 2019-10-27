import { Table } from './html_elms.js';


var xhr = new XMLHttpRequest();
xhr.onload = function () {
	if (this.status >= 200 && this.status < 300) {

		let table_div = document.querySelector('table.unfilled');
		let data = JSON.parse(this.responseText)
		new Table(table_div).populateWith(data);
		console.log('page updated')
	} else {
		console.log('The request failed!');
	}
};


xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();

// let table = document.querySelector('table.unfilled');

// let row = table.insertRow(-1)
// // header.insertRow([20, 20 , 20])
// // // console.log()
// // row.innerHTML = 'kutasiarze';
// row.insertCell(0).innerHTML = 'kutasiarze';
// row.insertCell(0).innerHTML = 'malarze';
// row.insertCell(0).innerHTML = 'handlarze';

// console.log(row.__proto__);

// for(let i in a){
//     console.log(i)
// }