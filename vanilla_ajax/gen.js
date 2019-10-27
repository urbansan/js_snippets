
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

export const generateTableHTML = data => {
	let rows = '';
	rows += tableHeader(data[0]);
	for(let idx in data){
		rows += tableRow(data[idx]);
	};
	let table = `<table>${rows}</table>`;
	return table
}

console.log('loaded gen module');

// class Table{
// 	constructor(data){
// 		this.data = data
// 	}

// 	generate(){

// 	}


// }