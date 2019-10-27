// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// console.log(dom.window.document.querySelector("p").textContent);

const stuff = ['stefan', 'telefan', 'kuba'];
let new_stuff = [];

class Person{
	constructor(name){
		this.name = name;
		this.age = Math.round(Math.random() * 80);
	}
}

// stuff.forEach(person => {
// 	new_stuff.push(new Person(person));
// });

for (var i = stuff.length - 1; i >= 0; i--) {
	name = stuff[i]
	new_stuff.push(new Person(name));
};



console.table(new_stuff)

f = Math.random();
c = Math.random();
l = Math.random();

console.log(`hadouken ${f + c + l}`)