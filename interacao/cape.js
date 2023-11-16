
var cabe = document.getElementById('topid')
var rope = document.getElementById('bottomid')

const cabecario = `
    
<nav>
    <div class="contem_1">
        <a href="index.html">home</a>
        <a href="sites_ex.html">sites exemplos</a>
        <a href="sobre.html" class="ultima">sobre nos</a>
    </div>
</nav>

`;

const rodape = `

    <footer class="rodape">
    <section class="contem_1 , rod_logo">
        <div></div>
    </section>
    <section class="infor , contem_1">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ex nobis mollitia dicta dolore</p>
    </section>
    </footer>

`

function criar_cabecario() {
    cabe.innerHTML += cabecario;
}

function criar_rodape(){
    rope.innerHTML += rodape;
}

// chamada de funcao

criar_cabecario()
criar_rodape()
