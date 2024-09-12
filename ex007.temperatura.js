const input = require('readline-sync'); 

console.log('TEMPERATURA EM CELSIUS');
const Fahrenheit = Number(input.question('Digite a temperatura em Fahrenheit: ')); 

console.clear(); 
console.log('TEMPERATURA EM CELSIUS'); 
const Celsius = ((Fahrenheit - 32) / 1.8).toFixed(2); 
console.log(`A temperatura em graus Celsius é ${Celsius}º`); 

