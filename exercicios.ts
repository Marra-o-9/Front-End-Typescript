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



