
function contador() {
    var list = []
    for (let i = 0; i<=10; i++){
        list.push(i)
    }

    for (let i = 0; i< list.length; i++){
       document.getElementById("contador").innerHTML=list
    }
    
}

function botao2() {
    let texto = document.createElement('P');
    texto.textContent = 'O débito técnico no desenvolvimento de produtos acontece quando tomamos decisões priorizando a velocidade da implementação em detrimento de escolhas arquiteturais que resolvam o problema por completo. Geralmente é resultado da implementação de correções rápidas e momentâneas, sem considerar uma solução mais adequada para o longo prazo.';

    document.body.appendChild(texto);
}

function Sonar() {
    window.open("https://sonarsource.com/",'_blank');
    
}

function Jenkins() {
    location.href = "https://www.jenkins.io/";
    
}