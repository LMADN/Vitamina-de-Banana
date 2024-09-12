var input = require('readline-sync')
console.log('SUA IDADE')
const agora = new Date()
const anoAtual =agora.getFullYear()
const anoDeNascimento = Number(input.question("Digite o ano de seu nascimento [yyyy]:"))

if(anoDeNascimento > anoAtual) {
    console.log('[ERROR] Ano de nascimento invalido')
} else {
    console.log(`Sua idade é ${anoAtual - anoDeNascimento} anos!`)
}