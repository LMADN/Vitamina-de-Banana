var input = require('readline-sync')
console.log("IMPOSTO")
console.log('================')
const valorProduto = Number(input.question("Quanto custou o produto em R$ ?"))
console.clear()
console.log("IMPOSTO")
console.log('================')
console.log(`Vou pagar de imposto R$${(valorProduto * 0.6).toFixed(2)}`)


