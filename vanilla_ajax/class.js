
export class Table {
	constructor(data){
		this.data = data
	}

	generateTableHTML(){
        let rows = '';
        rows += this.tableHeader(this.data[0]);
        for(let idx in this.data){
            rows += this.tableRow(this.data[idx]);
        };
        let table = `<table>${rows}</table>`;
        return table
    }

    tableHeader(columns) {
		
        let header = '';
        const keys = Object.keys(columns);
        for(let idx in keys){
            header += `\t<th>${keys[idx]}</th>\n`
        };
    
        header = `<tr>\n${header}</tr>\n`
    
        return header
    }
    tableRow(columns) {
        let temp_row = '';
        for(let idx in columns){
            temp_row += `    <td>${columns[idx]}</td>\n`
        };
    
        temp_row = `<tr>\n${temp_row}</tr>\n`
    
        return temp_row
    };

}