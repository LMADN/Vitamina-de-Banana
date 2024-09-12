const input = require('readline-sync');
console.log(' ======================')
console.log(' APROVADO OU REPROVADO ')
console.log(' ======================')
const notaA = Number(input.question ("Digite a nota 1: "))
const notaB = Number(input.question ("Digite a nota 2: "))
const media = ((notaA + notaB) / 2)
let resultadoFinal = ``
console.clear()
console.log(' ======================')
console.log(' APROVADO OU REPROVADO ')
console.log(' ======================')
if(media >=7){
    resultadoFinal = 'Aluno Aprovado!'
} else {
    resultadoFinal = 'Aluno Reprovado!'
}
console.clear()
console.log(' ======================')
console.log(' APROVADO OU REPROVADO ')
console.log(' ======================')
console.log(`Media do aluno: ${media}`)
console.log(resultadoFinal)
console.log(' ======================')



