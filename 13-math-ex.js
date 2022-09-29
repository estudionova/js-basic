const numero = Number (prompt('Digite um Numero:'));
//numero = Number(numero);

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');



numeroTitulo.innerHTML = numero;
texto.innerHTML =`<p>Raiz Quadrada é: ${(numero ** 0.5).toFixed(2) }</p>` ;
texto.innerHTML +=`<p>${numero} É inteiro? ${Number.isInteger(numero)}</p>` ;
texto.innerHTML +=`<p>${numero} É NaN: ${Number.isNaN(numero)}</p>` ;
texto.innerHTML +=`<p>Arredondando pra baixo: ${Math.floor(numero)}</p>` ;
texto.innerHTML +=`<p>Arredondando pra cima: ${Math.ceil(numero)}</p>` ;
texto.innerHTML +=`<p>Com duas casas decimais: ${numero.toFixed(2)}</p>` ;