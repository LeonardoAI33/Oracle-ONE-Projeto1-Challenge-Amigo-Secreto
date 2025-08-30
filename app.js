let amigos = []
let sorteados = []


function adicionarAmigo() {
    const input = document.getElementById('amigo');
    let nome = input.value.trim();
    if (nome === "" || !isNaN(nome)){
        alert("Por favor, insira um nome")
        return;
    }
    amigos.push(nome);
    console.log(nome);
    let qtdAmigo = amigos.length
}

function sortearAmigo(){
    const sorteio = document.getElementById('listaAmigos');
    let indice = Math.floor(Math.random() * amigos.length);
    console.log(indice);
    let amigoSorteado = amigos[indice]
    console.log(amigoSorteado);
    sorteio.innerHTML = amigoSorteado

}