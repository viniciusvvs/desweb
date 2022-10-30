
function logar(){
    var nomes = document.getElementById('Firstname').value
    
console.log(JSON.stringify({
    nomes:nomes}));

    fetch("/cadastro",{
        method:'POST',
        body: JSON.stringify({
            nomes:nomes
        }) , 
        headers: { "Content-Type" : "application/json" }
        
    })

    .then(async (resp) => {
        var status = await resp.text();
        console.log(status)
        if(status == 'conectado' ){
            location.href = '/index.html'
        alert("você se  cadastrou com sucesso!")
        }else {
            alert('nome e senha invalidos!!')
        }
        
    });

}
 

function exibeAlert(){
    alert("você foi cadastrado com sucesso!")
}