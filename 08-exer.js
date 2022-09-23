let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/*
varA = varB; // B
varB = varC; // C
varC = varA; // B


const varAtemp = varA; 
varA = varB; // B
varB = varC; // C
varC = varAtemp; // A
*/

[varA, varB, varC] = [varB, varC, varA];


console.log(varA, varB, varC);

