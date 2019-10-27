export class Table {
    constructor(tableElm){
        this.tableElm = tableElm;
    };

    populateWith(data){
        this._populateHeader(data);
        this._populateRows(data);
        
    };

    _populateRows(data){
        let body = this.tableElm.createTBody();
        for(let idx in data){
            let row = body.insertRow(-1);
            for(let idy in data[idx]){
                row.insertCell(-1).innerText = data[idx][idy];
            }
            // rows += this.tableRow(this.data[idx]);
        };
    }

    _populateHeader(data){
        let head = this.tableElm.createTHead().insertRow(-1);
        let labels = Object.keys(data[0]);
        console.log(labels);
        for(let idx in labels){
            head.insertCell(0).innerText = labels[idx];
        }
        head.innerHTML = head.innerHTML.replace(/td/g, 'th');
        console.log(head.innerHTML);
        console.log('kutasiarz');
    }
}

