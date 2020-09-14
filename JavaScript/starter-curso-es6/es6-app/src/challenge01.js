// Exercícios módulo 03
// Transforme os seguintes trechos de código utilizando async/await:

// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function umPorSegundo() {
 delay().then(() => {
 console.log('1s');
 delay().then(() => {
 console.log('2s');
 delay().then(() => {
 console.log('3s');
 });
 })
 });
}

async function umPorSegundo() {
  console.log( await umPorSegundo());


}


umPorSegundo();