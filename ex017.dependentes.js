var input = require('readline-sync');

console.log('========================');
console.log(' DEPENDENTES');
console.log('========================');

const nome = input.question('Digite seu nome: ');
let salario = Number(input.question("Digite seu salário R$: "));
const dependentes = Number(input.question("Digite a quantidade de dependentes: "));

// Verificar se a entrada é um número válido
if (isNaN(salario) || isNaN(dependentes)) {
    console.log('Por favor, insira valores válidos para salário e dependentes.');
    process.exit(); // Encerra o processo se a entrada for inválida
}

if (dependentes === 0) {
    salario += salario * 0.05;
} else if (dependentes <= 3) {
    salario += salario * 0.10;
} else if (dependentes <= 6) {
    salario += salario * 0.15;
} else {
    salario += salario * 0.20; 
}

console.clear();
console.log('========================');
console.log(' DEPENDENTES');
console.log('========================');
console.log(`Olá ${nome}, você tem ${dependentes} dependentes e seu novo salário será de R$${salario.toFixed(2)}`);

