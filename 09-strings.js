//               01234567
let umaString = 'O rato roeu a roupa do rei de roma.';


console.log(umaString);
console.log(`${umaString} em um lindo dia`);
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('m', 3));
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/[a-z]/g));
console.log(umaString.replace(/r/g, '#'));
console.log(umaString.length);
console.log(umaString.slice(-5, umaString.length -1));
console.log(umaString.split( ' ', 3));
console.log(umaString.toUpperCase());
console.log(umaString.toLocaleLowerCase());
