import hello from './hello';

const nome = "Emilie Rollandin";
const titolo = document.querySelector("#titolo");
titolo.innerHTML = hello + " " + nome;

console.log(hello + " " + nome);