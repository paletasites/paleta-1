
var conteiner = document.getElementById('topid')

function preto(id){
    console.log('comecou')
    var text = document.getElementById(id)
    console.log('peguei o id')
    text.style.opacity = 0.9;
    console.log('apliquei o estilo')
}

function criar_cabecario() {
    conteiner.innerHTML += `

    <div class="mostrar_nav"></div>
    <nav>
        <div class="contem_1">
            <a href="sobre.html" onclick="preto('sobre')" id="sobre">sobre nos</a>
            <a href="sites_ex.html">sites exemplos</a>
            <a href="index.html" class="ultima">Home</a>
        </div>
    </nav>
    
    `;
}

criar_cabecario()
