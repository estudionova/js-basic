const pessoa1 = {
  nome:  'Reinaldo',
  sobrenome: 'Junior',
  idade: 36,

  fala(){
    console.log(`A minha idade atual é ${this.idade}.`);
  },

  incrementaIdade(){
    this.idade++;

  }

};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();




/*
function criaPessoa(nome, sobrenome, idade){
  return { nome, sobrenome, idade };
};

const pessoa1 = criaPessoa('Reinaldo', 'Junior', 36);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'lara', 43);
const pessoa5 = criaPessoa('Jean', 'Otávio', 69);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.sobrenome, pessoa4.idade, pessoa5.nome);





const pessoa1 = {
  nome: 'Reinaldo',
  sobrenome: 'Junior',
  idade: 36

};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);



const array = [1, 2, 3];
array.push(4);
array[0] = 'Reinaldo';

console.log(array);

*/