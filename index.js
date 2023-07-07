// Fuente: https://www.npmjs.com/package/gpt-3-encoder?activeTab=readme
// 1- npm i
// 2- node index.js

// Importar el modulo Encoder
const {encode, decode} = require('gpt-3-encoder');

const stringEjemplo = 'Esta es una frase de ejemplo para probar la codificación';

// Codificar cadena de string en tokens
const encoded = encode(stringEjemplo);
console.log('Codificada esta cadena tiene el siguiente aspecto: ', encoded);

// Mostrar el objeto (tokens y strings)
console.log('Podemos ver cada token y el string que representa');
for(let token of encoded){
  console.log({token, string: decode([token])})
}

// Recuperar el string original (decodificar)
const decoded = decode(encoded);
console.log('Podemos decodificarlo de nuevo en:\n', decoded);

// Contar cantidad de tokens
const tokenCount = encoded.length;
console.log('La cantidad total de tokens es:', tokenCount);

