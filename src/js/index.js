/*
passo 1: pegar no JS o elemento
 HMTL correspondente ao
  botao troca tema
*/

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

/*
passo 2: dar um jeito de pegar
no JS o elemento HTMl
correspondente ao body
*/

const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botaao")
/*
passo 3: dar uma jeito de identificar
o clique do usuario no botao de 
troca de tema
*/

botaoAlterarTema.addEventListener('click', () => {
  console.log('clicou no botão')

  //passo 4: adicionar a classe modo-escuro no body
  body.classList.add("modo-escuro");

  // passo 5: trocar a imagem do botao de alterar tema para lua
  imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
});
