var readlineSync = require('readline-sync')
var numeroA = Number(readlineSync.question("Digite um numero: "))
var numeroB = Number(readlineSync.question('Digite outro numero: '))
console.log(`A media entre ${numeroA} e ${numeroB} e igual a ${(numeroA + numeroB / 2)}`)

