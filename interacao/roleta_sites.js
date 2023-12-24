
// achar todos os elementos

const rolagem = document.getElementById("rol")
var quant = 0
var cor_ind = 0
var onde = 5

// estrutura de cada um 

var rolsi = `
<div class="rolsi_titulo" id="nome"><p>Cadastro</p></div>
<div class="rolsi_desc" id="desc"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita placeat laudantium odit sint sapiente cumque ab magni, error earum eius quia culpa, quod magnam ipsa optio amet, facere nulla quidem?</p></div>
<div class="rolsi_sites" id="rolsi01">
    <div class="rolsi_img"></div>
</div>
`

var rolsi_nome = [
    `<p>Cadastro</p>`,
    'e-comerce',
    'Super Mario',
    'blog'
]

var rolsis_desc = [
    `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita placeat laudantium odit sint sapiente cumque ab magni, error earum eius quia culpa, quod magnam ipsa optio amet, facere nulla quidem?</p>`,

    `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatibus expedita placeat ab? Veniam labore perspiciatis eius enim sequi? Architecto labore libero explicabo perspiciatis illo commodi<p>`,

    `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita placeat laudantium odit sint sapiente cumque ab magni, error earum eius quia culpa, quod magnam ipsa optio amet, facere nulla quidem?</p>`,

    `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatibus expedita placeat ab? Veniam labore perspiciatis eius enim sequi? Architecto labore libero explicabo perspiciatis illo commodi</p>`
]

var fundos = [
    '../midia/img/formulariop.png',
    '../midia/img/fundo_aple.png',
    '../midia/img/relogio01.png',
    '../midia/img/formulariog.png'
]

// criar o rolsi

function criar_rolsis() {
    rolagem.innerHTML += rolsi
    document.getElementById('rolsi01').classList.add('um')
}

// parte de rolagem

function esperarPor(tempo) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, tempo);
    });
  }

async function transicao (event) {

    var id = document.getElementById('rolsi01')
    var rol_nome = document.getElementById('nome')
    var rol_desc = document.getElementById('desc')

    if (event.deltaY > 0){
        if(quant < 16 && quant >= 0){

            id.style.backgroundImage = `url('${fundos[cor_ind]}')`
            id.classList.add('rolsi_img')
            rol_nome.innerHTML = rolsi_nome[cor_ind]
            rol_desc.innerHTML = rolsis_desc[cor_ind]

            if(quant <= 15){
                quant ++
            }
            switch(quant){
                case 0:
                    cor_ind = 0
                    id.style.display = 'none'
                    await esperarPor(500)
                    id.style.display = 'block'
                    break
                case 5:
                    cor_ind = 1
                    id.style.display = 'none'
                    await esperarPor(500)
                    id.style.display = 'block'
                    break
                case 10:
                    cor_ind = 2
                    id.style.display = 'none'
                    await esperarPor(500)
                    id.style.display = 'block'
                    break
                case 15:
                    cor_ind = 3
                    id.style.display = 'none'
                    await esperarPor(500)
                    id.style.display = 'block'
                    break
            }
        }

    }else if (event.deltaY < 0){
        if(quant <= 16 && quant >= 0){

            id.style.backgroundImage = `url('${fundos[cor_ind]}')`
            id.classList.add('rolsi_img')
            rol_nome.innerHTML = rolsi_nome[cor_ind]

            rol_desc.innerHTML = rolsis_desc[cor_ind]

            if(quant > 0){
                quant --
            }
            switch(quant){
                case 0:
                    cor_ind = 0
                    id.style.display = 'none'
                    await esperarPor(500)
                    id.style.display = 'block'
                    break
                case 5:
                    cor_ind = 1
                    id.style.display = 'none'
                    await esperarPor(500)
                    id.style.display = 'block'
                    break
                case 10:
                    cor_ind = 2
                    id.style.display = 'none'
                    await esperarPor(500)
                    id.style.display = 'block'
                    break
                case 15:
                    cor_ind = 3
                    id.style.display = 'none'
                    await esperarPor(500)
                    id.style.display = 'block'
                    break
            }
        }
    }

}

document.addEventListener('DOMContentLoaded', () =>{
    var id = document.getElementById('rolsi01')
    id.style.backgroundImage = `url('${fundos[0]}')`
    id.classList.add('rolsi_img')
})
criar_rolsis()
document.body.addEventListener('wheel', transicao)
