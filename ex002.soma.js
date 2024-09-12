var readlineSync = require('readline-sync')
var numero1 = Number(readlineSync.question('Digite um numero: '))
var numero2 = Number(readlineSync.question('Digite outro numero: '))
console.log(`A soma entre ${numero1} e ${numero2} é igual a ${numero1 + numero2}`)
