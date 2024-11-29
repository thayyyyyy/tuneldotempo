const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Qual comida ela preferiria? ",
        alternativas: [
            {
                texto: "Macarrão com molho branco, brócolis e bacon",
                afirmacao: " Você conhece a thay ao ponto de saber que mesmo se ela preferisse o macarrão, ela faria uma panela cheia, somente para dividir entre vocês."
            },
            {
                texto: "Pudim ou Petit gatteau de chocolate",
                afirmacao: " A thay faria um pudim enorme para vocês comerem todos juntos."
            }
        ]
    },
    {
        enunciado: "Qual matéria a Thay gosta mais?",
        alternativas: [
            {
                texto: "História e biologia",
                afirmacao: " Você sempre esteve certo sobre os estudos dela, no final ela cursou psicologia e todos conseguiram desconto em sua clínica.",
            },
            {
                texto: "Inglês e matemática",
                afirmacao: " Apesar de você não conhecer quais estudos ela priorizava, você estava presente na sua formatura em psicologia."
            }
        ]
    },
    {
        enunciado: "Quais são os livros favoritos dela?",
        alternativas: [
            {
                texto: "Amor e azeitonas",
                afirmacao: " Ela sempre gostou de ler livros que descrevesem seus sentimentos, afinal aquele que observa a arte, tem sua própria perspectiva",
            },
            {
                texto: "Anne da Ilha",
                afirmacao: " Ela na verdade nunca teve nenhum livro favorito, mas ela tinha os mais especiais, entre eles priorizavam sempre aqueles que mais davam a sensação de estar viva (Você sempre soube que ela só queria se sentir assim)."
            }
        ]
    },
    {
        enunciado: "Qual a data favorita dela?",
        alternativas: [
            {
                texto: "Halloween",
                afirmacao: " Diante de todas as memórias com sua prima Lorena, o halloween se destaca por semrpe ser o qual elas se reunem tradicionalmente, para ficarem juntas apesar de todas as circunstânceas (Você reconhece a importância de ter alguém como ela, tratando-a bem).",
            },
            {
                texto: "Seu Aniversário",
                afirmacao: " Thay nunca gostou do próprio aniversário, isso foi a maior mentira da sua vida."
            }
        ]
    },
    {
        enunciado: "Do que ela mais tem medo?",
        alternativas: [
            {
                texto: "Ficar sozinha...",
                afirmacao: " Mesmo tendo medo de ficar sozinha, o maior trauma dela sempre foi o que aconteceu naquele dia.",
            },
            {
                texto: " 2018...",
                afirmacao: " O maior trauma de uma mlher, sempre persegue ela até a morte."
            }
        ]
    },
    {
        enunciado: " Quem ela mais odeia ",
        alternativas: [
            {
                texto: " Mãe ",
                afirmacao: " Apesar de todas as pessoas que ela odiava, ela odiaa os três igualmente.",
            },
            {
                texto: " Gabriel ",
                afirmacao: " Apesar de todas as pessoas que ela odiava, ela odiaa os três igualmente."
            },
            {
                texto: " Gustavo ",
                afirmacao: " Apesar de todas as pessoas que ela odiava, ela odiaa os três igualmente."
            }
        ]
    },
    {
        enunciado: "A thay se sente feliz com a vida dela?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Não."
            },
            {
                texto: "Não",
                afirmacao: "Sim."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2024...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();