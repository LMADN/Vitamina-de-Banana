const input = require('readline-sync');
console.log(' =====================');
console.log(' PAR OU ÍMPAR ');
console.log(' =====================');
const numero = Number(input.question('Digite um número: '));
if (numero % 2 === 0) {
    console.log(`${numero} é PAR!`);
} else {
    console.log(`${numero} é ÍMPAR!`);
}
console.log('======================');
