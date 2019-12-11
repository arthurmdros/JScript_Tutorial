import api from './api';

class App{
    constructor(){
        this.users = [];

        this.formEl = document.getElementById('user-form');
        this.inputEl = document.querySelector('input[name=users');
        this.listEl = document.getElementById('user-list');
        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addUser(event);
    
    }

    setLoading(loading = true) {
        if(loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id','loading');

            this.formEl.appendChild(loadingEl);
        }else {
            document.getElementById('loading').remove();
        }
    }

    async addUser(event){
        event.preventDefault();

        const userInput = this.inputEl.value;

        if(userInput === 0)
            return;

        this.setLoading();

        try{
            const response = await api.get(`/users/${userInput}`);
            
            const {login, bio, html_url, avatar_url} = response.data;

            this.users.push({
                login,
                bio,
                html_url,
                avatar_url,
            });

            this.inputEl.value = '';

            this.render();
        }catch(err) {
            alert('O usuário não existe');
        }

        this.setLoading(false);
    }
    
    render(){
        this.listEl.innerHTML = '';
        this.users.forEach(user => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', user.avatar_url);
            
            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(user.login));

            let descEl = document.createElement('p');
            descEl.appendChild(document.createTextNode(user.bio));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target','_blank');
            linkEl.setAttribute('href', user.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();