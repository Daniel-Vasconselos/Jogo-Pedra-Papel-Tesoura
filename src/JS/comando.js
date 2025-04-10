cronometro = document.getElementById('tempo')
pt_jogador = document.getElementById('pt_j1')
pt_computador = document.getElementById('pt_j2')
img_jogador = document.getElementById('img_jogador1')
img_computador = document.getElementById('img_jogador2')
btn_pedra = document.getElementById('btn_pedra')
btn_papel = document.getElementById('btn_papel')
btn_tesoura = document.getElementById('btn_tesoura')
box_jogador = document.getElementById('jogador1')
box_computador = document.getElementById('jogador2')


var tempo = 5
var intervalo
var escolha = -1
var ponto_jogador = 0
var ponto_computador = 0
var perdedor = ''



function pedra(){
    btn_pedra.style.border ="blue solid 5px"
    btn_papel.style.border ="#000 solid 3px"
    btn_tesoura.style.border ="#000 solid 3px"
    escolha = 0
}

function papel(){
    btn_pedra.style.border ="#000 solid 3px"
    btn_papel.style.border ="blue solid 5px"
    btn_tesoura.style.border ="#000 solid 3px"
    escolha = 1
}
function tesoura(){
    btn_pedra.style.border ="#000 solid 3px"
    btn_papel.style.border ="#000 solid 3px"
    btn_tesoura.style.border ="blue solid 5px"
    escolha = 2
}

function começarjogo(){
    perdedor = ''
    let aleatorio = Math.floor(Math.random()*3)
    img_computador.setAttribute('src','')
    img_jogador.setAttribute('src','')
    


    if (!intervalo){
        intervalo = setInterval(() => {
        cronometro.innerHTML = `00:0${tempo}`
        tempo--
        
        if(tempo < 0){
            
            if(escolha == -1){
                window.alert('[ERRO] NEHUMA OPÇÃO ESCOLHIDA')
            } else {
                mover()
                switch(aleatorio){
                    case 0:
                        img_computador.setAttribute('src','src/imagens/pedra-direito-melhorada.png')
                        break
                    case 1:
                        img_computador.setAttribute('src','src/imagens/papel-direito-melhorada.png')
                        break
                    case 2:
                        img_computador.setAttribute('src','src/imagens/tesoura-direito-melhorada.png')
                        break
                }

                switch(escolha){
                    case 0:
                        img_jogador.setAttribute('src','src/imagens/pedra-esquerdo-melhorada.png')
                        break
                    case 1:
                        img_jogador.setAttribute('src','src/imagens/papel-esquerdo-melhorada.png')
                        break
                    case 2:
                        img_jogador.setAttribute('src','src/imagens/tesoura-esquerdo-melhorada.png')
                        break
                }

                if (escolha == 0 && aleatorio == 2 || escolha == 1 && aleatorio == 0 || escolha == 2 && aleatorio == 1 ){
                    ponto_jogador += 1
                    pt_jogador.innerHTML = ponto_jogador
                    perdedor = box_computador

                } else if(escolha != aleatorio) {
                    ponto_computador += 1
                    pt_computador.innerHTML = ponto_computador
                    perdedor = box_jogador
                }
                
                setTimeout(() => {
                    vibrar(perdedor)
                }, 800)
            }
                
            clearInterval(intervalo)
            intervalo = null
            tempo = 5
            escolha = -1
            btn_pedra.style.border ="#000 solid 3px"
            btn_papel.style.border ="#000 solid 3px"
            btn_tesoura.style.border ="#000 solid 3px"
            }
        }, 1000)
    }
}

function mover() {
    box_jogador.style.left = '100px'
    box_computador.style.left = '-100px'
    setTimeout(() => {
        box_jogador.style.left = '0'
        box_computador.style.left = '0'
    }, 400)
    
}

function vibrar(alvo) {
    if(alvo != ''){
        alvo.classList.add("shake");
        setTimeout(() => {
            alvo.classList.remove("shake");
        }, 300);
    } 
}
