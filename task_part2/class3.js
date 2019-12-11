
const arr = [1, 2, 3, 4, 5];
const result = arr.map(item => item + 10); 
console.log("Questão 3.1: "+result);

const usuario = [{ nome: 'Diego', idade: 23 }];

const resp = usuario.map(item => item.idade);
console.log("Questão 3.2: "+resp);

const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome,idade = 18) =>  {return {nome, idade} };
console.log("Questão 3.3: ");
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));


const promise = () => {
 return new Promise(function(resolve, reject) {
 return resolve();
 })
}
console.log("Questão 3.4: ");
console.log(promise());