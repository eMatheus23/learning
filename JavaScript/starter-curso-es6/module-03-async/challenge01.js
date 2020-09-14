// Exercícios módulo 03
// Transforme os seguintes trechos de código utilizando async/await:

// Função delay aciona o .then após 1s
const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default async function umPorSegundo() {
	await delay();
	console.log("1s");
	await delay();
	console.log("2s");
	await delay();
	console.log("3s");
}


/* FUNÇÃO ANTIGA:

function umPorSegundo() {
	delay().then(() => {
		console.log("1s");
		delay().then(() => {
			console.log("2s");
			delay().then(() => {
				console.log("3s");
			});
		});
	});
}

*/
