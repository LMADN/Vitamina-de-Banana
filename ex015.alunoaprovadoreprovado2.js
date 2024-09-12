const input = require('readline-sync');

console.log(' ======================');
console.log(' APROVADO OU REPROVADO 2 ');
console.log(' ======================');

const notaA = Number(input.question('Digite a nota 1: '));
const notaB = Number(input.question('Digite a nota 2: '));

console.clear();

console.log(' ======================');
console.log(' APROVADO OU REPROVADO 2 ');
console.log(' ======================');

const media = (notaA + notaB) / 2;
console.log(`Média do aluno: ${media.toFixed(2)}`);

if (media >= 7) {
    console.log('Aluno aprovado');
} else if (media >= 5) {
    console.log('Aluno em recuperação');
} else

    console.log('Aluno reprovado!');

console.log(' ======================');
