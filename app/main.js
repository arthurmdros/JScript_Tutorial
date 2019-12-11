/*var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/arthurmdros');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }
                else
                    reject('ERRO na requisição');
            }
        }
    });
}

minhaPromise()*/
axios.get('https://api.github.com/users/arthurmdros')
    .then(function(response){
        console.log(response.data.avatar_url);
    })
    .catch(function(error){
        console.warn(error);
    });
