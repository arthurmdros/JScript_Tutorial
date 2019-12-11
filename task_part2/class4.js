const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
};

const{nome,endereco: {cidade,estado} } = empresa;

console.log("Questão 4.1: ");
console.log(nome);
console.log(cidade);
console.log(estado);

function mostraInfo(usuario){
    return `${user} tem ${idade} anos.`;
}
const usuario = {user: 'Diego', idade: 23};
const{user, idade} = usuario;
console.log("Questão 4.2: "+mostraInfo(user,idade));