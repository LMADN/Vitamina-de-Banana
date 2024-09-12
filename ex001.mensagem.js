var readlineSync = require('readline-sync');
var nome = readlineSync.question('Qual seu nome? ');
console.log(`Olá! Seja bem-vindo, ${nome}!`);