var input = require('readline-sync');

console.log('=====================');
console.log(' PLACAR DO JOGO ');
console.log(' ====================');

const timeA = Number(input.question("Placar do time A: "));
const timeB = Number(input.question("Placar do time B: "));

let status = ``;

const diferenca = Math.abs(timeA - timeB);

if (diferenca === 0) {
    status = "EMPATE";
} else if (diferenca <= 3) {
    status = "NORMAL";
} else {
    status = "GOLEADA";
}

console.log('=====================');
console.log(' PLACAR DO JOGO ');
console.log(' ====================');
console.log('            PLACAR           ');
console.log(`Time A: ${timeA} x ${timeB} Time B`);
console.log(`Status: ${status}`);
console.log('=====================');
