/**
 * Reinaldo Junior tem 36 anos, pesa 120kg, tem 1.89 de altura e seu IMC é de 
 * Reinaldo Junior nasceu em 1986
 */

const nome = 'Reinaldo';
const sobreNome = 'Junior';
const idade = 36;
const peso = 120;
const alturaEmM = 1.89;

let indiceMassaCorporal; // peso / (altura * altura)
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento;
anoNascimento = 2022 - idade;

/*
console.log(imc);
console.log(anoNascimento);
*/

console.log(nome, sobreNome, 'tem', idade, 'anos, pesa', peso +'kg');
console.log('tem', alturaEmM, 'de altura e seu imc é de', indiceMassaCorporal);
console.log(nome, 'nasceu em', anoNascimento + '.');

console.log('----------------- ---------------------- ----------------');

//Template string
console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${alturaEmM} de altura e seu imc é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);