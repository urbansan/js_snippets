import { Table } from './class.js';

var xhr = new XMLHttpRequest();
xhr.onload = function () {
	if (this.status >= 200 && this.status < 300) {

		let table_div = document.getElementById('ajax_table');
		let data = JSON.parse(this.responseText)
		table_div.innerHTML = new Table(data).generateTableHTML();
		console.log('page updated')
	} else {
		console.log('The request failed!');
	}
};


xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();
