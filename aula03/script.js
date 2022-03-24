 
  function criarParagrafo(params) {
    let para = document.createElement('P');
    para.textContent = 'Você criou o botão!';
    document.body.appendChild(para);
    
}
const botoes = document.querySelectorAll('button');
for (var i = 0; i <botoes.length ; i++){
    botoes[i].addEventListener('click', criarParagrafo);
}