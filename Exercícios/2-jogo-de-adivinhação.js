// Escreva um script que gere um número aleatório de 1 a 100 e peça ao 
// usuário, para adivinhar. Use while para repetir até acertar, contando 
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require("prompt-sync")();

console.log('----Jogo da advinhação----');
let chute = 0;
let tentativas = 0;
const numeroAleatorio = parseInt((Math.random() * 100) + 1);

while (chute !== numeroAleatorio) {
    chute = Number(prompt('Tente descobrir o número secreto, digite um valor entre 1 e 100: '));
    tentativas++

    if (chute < numeroAleatorio) {
        console.log(`ERROU: O número secreto é maior que ${chute}!`);
    } else if (chute > numeroAleatorio) {
        console.log(`ERROU: O número secreto é menor que ${chute}!`);
    } else {
        console.log('Você Acertou!');
        console.log(`${chute} é o número secreto.`);
        console.log(`E você acertou na ${tentativas}° tentativa.`);
    }
};