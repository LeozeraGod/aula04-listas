//? Listas ?

//? Array - Conjunto de elementos de mesmo tipo de única dimensão
/*let numeros: number[] = [1, 2, 3, 4, 5, 6];

let matrizNumeros: number[][] = [
  [1, 2, 3, 4, 5, 6],
  [1, 5, 5, 6, 67, 1],
];

//? Array de um array de números - multidimensional
let matrizEscalar: number[][] = [
  [2, 0, 0],
  [0, 2, 0],
  [0, 0, 2],
];

numeros.push(10);
// numeros.push("10") // entrada inválida

//? Lista - Conjunto de elementos de tipos diferentes
let elementos: (number | string | boolean)[] = [
  1,
  "cezar",
  "cezar.mezzalira@email.com",
  true,
  "4699981470",
];

//? [id, nome, email, ativo, celular]
let matriz: (number | string | boolean)[][] = [
  [1, "Cezar", "cezar.mezzalira@email.com", true, "4699981470"],
  [2, "Gustavo", "gustavo@email.com", true, "4612312321321"],
];

//? Tupla - conjunto de valores finito com tipos definidos
let cadastros: [number, string, string, boolean, string] = [
  1,
  "Cezar",
  "cezar.mezzalira@email.com",
  true,
  "4699981470",
];

const linha = "00000000000000|00000000000000000|100,25|100,25|S|AAAAMM";

const campos = linha.split("|");

console.log(linha);
console.log(campos);

//? Tuplas são imutáveis
//? [cnpj, nome_empresa, receita_bruta, receita_tributacao, valido, data]
const valores: [string, string, number, number, boolean, string] = [
  campos[0],
  campos[1],
  parseFloat(campos[2]),
  parseFloat(campos[3]),
  campos[4] === "S" ? true : false,
  campos[5],
];

console.log(valores);*/

//! Criar uma matriz de 10 produtos que contenha o seguinte layout:
//! id do tipo texto, nome do tipo texto, quantidade em estoque do tipo float,
//! ativo do tipo boolean, data de criação do tipo texto,
//! data ultima atualização do tipo texto.
//! A matriz deve conter os tipos corretamente, sendo na prática uma lista de tuplas.
//! Exemplo de uma linha da matriz:
//! [1, "MacBook", 10.5, true, "20240101", "20241118"]


  const produtos: [number, string, number,boolean, string, string][] = [
    [1, "MacBook", 10.5, true, "20240101", "20241118"],
    [2, "Smart TV 55''", 40.0, true, "20240205", "20241118"],
    [3, "Drone DJI Mini 3", 25.0, false, "20240208", "20241120"],
    [4, "Console PlayStation 5", 30.0, true, "20240212", "20241119"],
    [5, "Câmera GoPro Hero 11", 15.0, true, "20240215", "20241117"],
    [6, "Fone de Ouvido", 20.0, false, "20240218", "20241116"],
    [7, "Notebook Dell", 8.5, true, "20240220", "20241115"],
    [8, "Amazon Echo", 18.0, true, "20240225", "20241114"],
    [9, "Carregador Solar Anker", 5.0, true, "20240228", "20241113"],
    [10, "Monitor LG 34''", 35.0, false, "20240301", "20241112"]
  ];
  console.log(produtos);