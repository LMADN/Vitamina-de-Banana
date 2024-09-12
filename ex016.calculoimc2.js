const input = require('readline-sync');

console.log(' ======================');
console.log(' CALCULO IMC 2 ');
console.log(' ======================');
const peso = Number(input.question('Digite seu peso (Kg): '))
const altura = Number(input.question('Digite sua altura(m): '))
let satus = ``

const imc = (peso / (altura * altura)) // usar ponto para altura pois tem bug com virgula 

if(imc < 17) {
    status = 'MUITO ABAIXO DO PESO'

} else if (imc < 18.5) {
    status = `ABAIXO DO PESO`

} else if (imc < 25) {
    status = `PESO IDEAL`

} else if (imc < 30) {
    status = `SOBREPESO`

} else if (imc < 35) {
    status = `OBSESIDADE`

} else if (imc < 40) {
status = `OBESIDADE SEVERA`

} else {
    status = `OBESIDADE MORBIDA`
}

console.clear()
console.log(' ======================');
console.log(' CALCULO IMC 2 ');
console.log(' ======================');
console.log(`Seu IMC é igual a ${imc.toFixed(2)}`)
console.log(`STATUS: ${status}!`)
console.log(' ======================');





