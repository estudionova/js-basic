/*
Primitivos (imutáveis) => string, number, boolean, undefined, null (bigint, symbol) - Valor

Referencia (mutável) => array, object, function - Passados por referência

*/


const a = {
  nome: 'Reinaldo',
  sobrenome: 'Junior'
};

const b = {...a};

a.nome = 'Joao';

console.log(a, b);





/*
let a = [1, 2, 3];
let b = a;        //apontam pro mesmo local na memoria
let c = [...a];


console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();

a.push('Reinaldo');
console.log(a, c);


let a = 'A';
let b = a; //Cópia

console.log(a, b);

a = 'Outra coisa';
console.log(a, b);



//          01234567
let nome = 'Reinaldo';
nome[0] = 'J';
console.log(nome[0], nome);
*/