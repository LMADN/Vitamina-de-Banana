var input = require('readline-sync')
console.log('SEUS DÓLARES')
const valorEmReal = Number(input.question("Digite o valor em reais R$"))
console.clear()
console.log('SEUS DÓLARES')
console.log(`Você tem $${(valorEmReal / 5.57).toFixed(2)}`)

