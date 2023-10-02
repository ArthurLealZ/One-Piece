var musica = document.getElementById("background_music");
musica.play();

const botao = document.getElementById('zoro')

const botoes = document.querySelectorAll('.botao');
console.log(botoes);


botoes.forEach(botao => {
    botao. addEventListener("click", () => {



        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");
    });
});


const personagens = document.querySelectorAll(".personagem")


botoes.forEach((botao, indice) => {
    botao. addEventListener("click", () => {


        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");

        personagens[indice].classList.add("selecionado");



    });
});

var musica = document.getElementById("background_music");
musica.play();





