/**
 * Não podemos criar constantes com palavras reservadas ex: let, console, if, else etc
 * constantes precisam ter nomes significativos
 * Não pode começar o nome de uma constantes com número
 * Não podem conter espaços ou traços
 * Ultilizamos camelCase
 * Case-sensitive
 * Não pode modificar o valor de uma constate
 * Não utilize var, ultilize const
*/

const nome = 'Reinaldo Junior';
console.log(nome);

const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof (primeiroNumero));

console.log(primeiroNumero + segundoNumero);