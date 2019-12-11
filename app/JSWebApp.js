var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var btnElement = document.querySelector('#app #remover');


var list = JSON.parse(localStorage.getItem('lista_Elementos')) || []; //CARREGANDO LISTA DO LOCAL STORAGE

function renderizar(){
    listElement.innerHTML = ''; 
    for(todo of list){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);        
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);        
    }
}

renderizar();

function adicionar(){
    var todoText = inputElement.value;

    list.push(todoText);

    inputElement.value = '';
    renderizar();
    saveToStorage();
}         


buttonElement.onclick = function verificar(){
    if(inputElement.value === ''){
        alert('Preencha o campo para adicionar!');
    }
    else{       
        adicionar();
    }
}

btnElement.onclick = function excluir(pos){
    var pos = 0;
    list.splice(pos,1); //metodo para excluir um elemento da lista (posicao, quantidade)
    renderizar();
    saveToStorage();
}
//ARMAZENAMENTO LOCAL
function saveToStorage(){
    //JSON SERVE PARA ALTERAR O TIPO PARA STRING E VICE-VERSA
    localStorage.setItem('lista_Elementos',JSON.stringify(list));
}