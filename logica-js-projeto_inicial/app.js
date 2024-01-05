alert('Olá, Mundo!');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10');
let acertou = (chute == numeroSecreto);

if (acertou) {
    console.log('Isso ai! Você descobriu o número secreto!');
}