var input = require('readline-sync');

console.log('=====================');
console.log(' APROVEITAMENTO ');
console.log(' ====================');

const notaA = Number(input.question("Digite a nota 1: "));
const notaB = Number(input.question("Digite a nota 2: "));

if (isNaN(notaA) || isNaN(notaB)) {
    console.log('Por favor, insira valores válidos para as notas.');
    process.exit();
}

let aproveitamento = '';

const media = (notaA + notaB) / 2;

if (media >= 9) {
    aproveitamento = 'A';
} else if (media >= 7) {
    aproveitamento = 'B';
} else if (media >= 5) {
    aproveitamento = 'C';
} else if (media >= 3) {
    aproveitamento = 'D';
} else if (media >= 1) {
    aproveitamento = 'E';
} else {
    aproveitamento = 'F';
}

console.clear();
console.log('=====================');
console.log(' APROVEITAMENTO ');
console.log(' ====================');
console.log(`Média do aluno: ${media.toFixed(2)}`);
console.log(`Aproveitamento: ${aproveitamento}`);
console.log('===================================');
