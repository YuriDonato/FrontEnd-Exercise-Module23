document.addEventListener('DOMContentLoaded', function(){
    const img_perfil = document.querySelector('#img-perfil')
    const link = document.querySelector('#link')
    const nome = document.querySelector('#nome')
    const user = document.querySelector('#user')
    const repositorio = document.querySelector('#repositorios')
    const seguidores = document.querySelector('#seguidores')
    const seguindo = document.querySelector('#seguindo')

    fetch(`https://api.github.com/users/${user.innerText}`)
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
        console.log(json)
        img_perfil.src = json.avatar_url;
        link.href = json.html_url;
        nome.innerText = json.name;
        user.innerText = `@${json.login}`;
        repositorio.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
    })
})