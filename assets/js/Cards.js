var posicao;
var atualizacao = 0;
var decrecente = false;
var botaoVoltar = document.getElementById("voltar");

function voltar() {
    // console.log(posicao);
    var calcula1 = posicao + 150;
    var calcula2 = posicao - 5;

    if(posicao > -40) {
        botaoVoltar.classList.remove("subindo");
        botaoVoltar.classList.add("descendo");
    }

    else{
    
        if(atualizacao >= calcula1 || atualizacao <= calcula2) {
            atualizacao = posicao;
        }

        if(atualizacao < posicao){
            decrecente = true;
            botaoVoltar.classList.add("subindo");
            botaoVoltar.classList.remove("descendo");
        }

        if(atualizacao > posicao){
            decrecente = false;
            botaoVoltar.classList.remove("subindo");
            botaoVoltar.classList.add("descendo");
        }
    }


}

class Cards {
    constructor() {
        this.posicaoSectionDicas = document.getElementById('cabecalho');
        this.cardEsq = document.querySelector('.card-esq');
        this.cardDir = document.querySelector('.card-dir');

    }

    scrollCards() {
        window.requestAnimationFrame(this.calculoScroll.bind(this));
        voltar();
    }

    calculoScroll() {
        posicao = this.posicaoSectionDicas.getBoundingClientRect()['y'];
        // console.log(posicao)
        if (posicao >= -800) {
            this.cardEsq.style.transform = `translate(${((-posicao) + -800)/10}%)`;
            // this.cardDir.style.transform = `translate(${(posicao - -800)/10}%)`;
        }
    }
}

export { Cards }