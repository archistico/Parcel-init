import hello from './hello';

const nome = "Emilie";
const titolo = document.querySelector("#titolo");
titolo.innerHTML = hello + " " + nome;

console.log(hello + " " + nome);