// Exercício 1: Declaração de Variáveis

// Escreva um programa em TypeScript que realize as seguintes tarefas:

// Declare uma variável chamada idade e atribua a ela o valor 25.
// Garanta que essa variável seja do tipo number.
let idade: number = 25;

// Declare uma variável chamada nome e atribua a ela o valor 'João'.
// Garanta que essa variável seja do tipo string.
let nome: string = "João";

// Declare uma variável chamada isAtivo e atribua a ela o valor true.
// Garanta que essa variável seja do tipo boolean.
let isAtivo: boolean = true;

// Seu programa deve declarar e inicializar essas variáveis conforme descrito acima.
// Certifique-se de que as variáveis tenham os tipos de dados corretos.
// Ao final do programa, não se esqueça de imprimir no console o valor de cada variável declarada.

console.log(`Idade: ${idade}`);
console.log(`Nome: ${nome}`);
console.log(`Ativo: ${isAtivo}`);



// Exercício 2: Interfaces

// Escreva um programa em TypeScript que realize as seguintes tarefas:

// Crie uma interface chamada Usuario com as seguintes
// propriedades: nome (string), idade (number) e email (string).
interface Usuario {
    nome: string;
    idade: number;
    email: string;
}

// Declare uma variável do tipo Usuario e atribua valores a todas as suas propriedades.
let usuario: Usuario = {nome: "Henrique", idade: 21, email: "marrabarbosa9@gmail.com"};

// Seu programa deve criar a interface Usuario conforme descrito acima e, em seguida,
// declarar e inicializar uma variável do tipo Usuario com valores para todas as suas
// propriedades. Ao final do programa,
// não se esqueça de imprimir no console o valor da variável do tipo Usuario.

console.log(usuario);



// Exercício 3: Funções

// Escreva um programa em TypeScript que realize as seguintes tarefas:

// Crie uma função chamada soma que recebe dois parâmetros do tipo number e retorna
// a soma desses dois números.
function soma(num1: number, num2: number) {
    return num1 + num2;
}

// Crie uma função chamada saudacao que recebe um parâmetro do tipo string chamado nome
// e retorna uma mensagem de saudação utilizando esse nome.
function saudacao(nome: string) {
    return `Olá, ${nome}!`
}

// Seu programa deve definir as duas funções conforme descrito acima.
// Após a definição das funções, chame cada uma delas com valores adequados
// como argumentos e imprima os resultados no console.

console.log(soma(12, 17));
console.log(saudacao("Henrique"));



// Exercício 4: Compilação TypeScript

// Escreva um programa em TypeScript que realize as seguintes tarefas:

// 1. Crie um arquivo TypeScript chamado app.ts.

// 2. Escreva o código TypeScript dos exercícios 1 a 3 no arquivo app.ts.

// 3. Compile o arquivo TypeScript para JavaScript usando o compilador TypeScript (tsc)
// no terminal.

// 4. Execute o arquivo JavaScript resultante usando o Node.js para verificar
// se o código está funcionando corretamente.



// Exercício 5: Conversão de Código JavaScript para TypeScript

// Para este exercício, vamos converter um pequeno projeto JavaScript existente para TypeScript.
// Suponha que temos o seguinte código JavaScript:

// JavaScript Original
//
// function calcularArea(raio) {
//     return Math.PI * raio * raio;
// }
//
// function imprimirArea(raio) {
//     console.log('A área do círculo é: ' + calcularArea(raio));
// }
//
// imprimirArea(5);
