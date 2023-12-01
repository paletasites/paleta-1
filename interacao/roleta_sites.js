
// achar todos os elementos

const rolagem = document.getElementById("rol")
var o = 0.6
var o2 = 1

// estrutura de cada um 

const rolsis = [

    `
    <div class="rolsi_sites" id="rolsi01">
        <div class="rolsi_img"></div>
    </div>
    `,
    `
    <div class="rolsi_sites" id="rolsi02">
        <div class="rolsi_img"></div>
    </div>
    `,
    `
    <div class="rolsi_sites" id="rolsi03">
        <div class="rolsi_img"></div>
    </div>
    `,
    `
    <div class="rolsi_sites">
        <div class="rolsi_img" id="rolsi04"></div>
    </div>
    `,
    `
    <div class="rolsi_sites">
        <div class="rolsi_img" id="rolsi05"></div>
    </div>
    `

]

const rolsis_fundo = [
    'midia/img/Captura de tela 2023-10-20 174632.png',

    'midia/img/Captura de tela 2023-10-20 172049.png',

    'midia/img/Captura de tela 2023-10-20 171922.png'
]

// criar os rolsis

function criar_rolsis() {

    let i = 0
    let nomeid = 'rolsi01'
    let nomeid2 = 'rolsi02'
    
    rolagem.innerHTML += rolsis[i]
    var id = document.getElementById(nomeid)
    id.classList.add('um')

    i ++
    rolagem.innerHTML += rolsis[i]
    var id2 = document.getElementById(nomeid2)
    id2.classList.add('dois')
}

// estilo de cada um 

// parte de rolagem

function roda_gigante(event){

    let i = 0
    let nomeid = 'rolsi01'
    let nomeid2 = 'rolsi02'
    var id = document.getElementById(nomeid)
    var id2 = document.getElementById(nomeid2)
    var id_chao = 200
    let bottom = 60
    let bott = 0

    if (event.deltaY > 0) {

        // um
        console.log('Rolagem para baixo')
        if (bottom <= id_chao){
            bottom ++
        }
        id.style.bottom = bottom + 'px'
        if (o2 > 0){
            o2 = o2 - 0.1
            if (o <= 0.9){
                o ++
                id2.style.opacity = o
            }
        }
        id.style.opacity = o2
        
        // dois
        bottom = 60
        o = 0.6
        id2.style.opacity = 0.6
        if( o < 1){
            o++
        }
        id2.style.opacity = o
        if(bott < bottom){
            bott ++
        }
        id2.style.bottom = bott + 'px'
        
    } else if (event.deltaY < 0) {
        
        // um
        o2 = 1
        id.style.opacity = 1
        id.style.bottom = '60px'

        // dois
        console.log('Rolagem para cima');
        if (o > 0.2){
            o = o - 0.1
        }
        id2.style.opacity = o
        

      }
}

// chamada de funcao

criar_rolsis()
document.body.addEventListener('wheel',roda_gigante)
