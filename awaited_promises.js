function sleep(ms) {
	console.log('sleeping');
	const promise = new Promise
		(resolve => {
	  		setTimeout(resolve, ms);
		}).then(value => {
			console.log('przespane')
		});

	return promise;
};

async function new_function(){
	await sleep(5000);
	console.log('pobudka');
};

await sleep(100);

// setTimeout(() => {
// 	console.log('przespane');
// }, 0)
// console.log('starting');
// new_function();
// console.log('finishing');


const siemano = [];

siemano.