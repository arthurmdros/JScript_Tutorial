const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const map = usuarios.map(function(item){
    return item.idade;
});

const filter = usuarios.filter(function(item){
    return item.empresa === 'Rocketseat' && item.idade >= 18;
});

const find = usuarios.find(function(item){
    return item.empresa === 'Google';
});

    
//FALTA REALIZAR UMA OPERACAO DE MULTIPLICAR A IDADE DOS USUARIOS POR 2
//E DEPOIS FILTRAR AQUELES QUE TEM ATE 50 ANOS


console.log("1ªQUESTÃO: "+map);
console.log("2ªQUESTÃO:");
console.log(filter);
console.log("3ªQUESTÃO: "+find);
console.log("4ªQUESTÃO: "+result);