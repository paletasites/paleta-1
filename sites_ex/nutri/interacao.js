console.log("sinal de vida")

// sessao do mais_um_pouco

const contem_tudo = window.document.getElementById("tudo")
const titulo_tudo = window.document.getElementById("titulo_tudo")
const p_tudo = window.document.getElementById("p_tudo")
const button_tudo = window.document.getElementById("button002")
const folha_tudo = window.document.getElementById("folha003")
var tudo_afetado = false;

window.addEventListener('scroll', function() {
    var posicao_tudo = contem_tudo.getBoundingClientRect()

    if (posicao_tudo.top < window.innerHeight - 200 && tudo_afetado == false) {
        contem_tudo.style.animation = "1s entrar_tudo"
        contem_tudo.style.animationFillMode = "forwards"

        titulo_tudo.style.animation = "1s entrar_lado_esquerdo"
        titulo_tudo.style.animationFillMode = "forwards"

        p_tudo.style.animation = "1s entrar_lado_direito"
        p_tudo.style.animationFillMode = "forwards"

        button_tudo.style.animation = "1s entrar_cima"
        button_tudo.style.animationFillMode = "forwards"

        folha_tudo.style.animation = "1s folha_rodando"
        folha_tudo.style.animationFillMode = "forwards"

        tudo_afetado = true;
    }if (posicao_tudo.top > window.innerHeight - 200 && tudo_afetado == true) {
        contem_tudo.style.animation = "none"
        titulo_tudo.style.animation = "none"
        p_tudo.style.animation = "none"
        button_tudo.style.animation = "none"
        folha_tudo.style.animation = "none"
        tudo_afetado = false;
    }
});
