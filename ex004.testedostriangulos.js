var readlineSync = require('readline-sync')
console.log('======================')
console.log(' TESTE DOS TRIÂNGULOS ')
console.log('======================')
var ladoA = Number(readlineSync.question('Digite o lado 1: '))
var ladoB = Number(readlineSync.question('Digite o lado 2: '))
var ladoC = Number(readlineSync.question('Digite o lado 3: '))
console.clear
var triangulo = Math.abs(ladoB - ladoC) < ladoA && ladoA < ladoB + ladoC && Math.abs(ladoC - ladoA) < ladoB && ladoB < ladoC + ladoA && Math.abs(ladoA - ladoB) < ladoC && ladoC < ladoA + ladoB
var equilatero = ladoA == ladoB && ladoB == ladoC && ladoC == ladoA
var escaleno = ladoA != ladoB && ladoB != ladoC && ladoC != ladoA
console.log('======================')
console.log(' TESTE DOS TRIÂNGULOS ')
console.log('======================')
console.log(`Valores Digitados: ${ladoA}, ${ladoB}, ${ladoC}`)
console.log(`Triangulo: ${triangulo}`)
console.log(`Equilatero: ${equilatero}`)
console.log(`Escaleno: ${escaleno}`)
console.log('======================')




