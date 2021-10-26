const barco = document.querySelector(".barco");
let barcoX = 0;

// carrossel
const setaEsquerda = document.querySelectorAll(".setaEsq");
const setaDireita = document.querySelectorAll(".setaDir");
const projetos = document.querySelectorAll(".projeto");
let projetoAtivo = 0;

// grafico
const graficos = document.querySelectorAll(".grafico");
const small = window.matchMedia("(min-width: 576px)").matches
const md = window.matchMedia("(min-width: 766px)").matches 
const lg = window.matchMedia("(min-width: 991px)").matches 
const xl = window.matchMedia("(min-width: 1199px)").matches 
const xxl = window.matchMedia("(min-width: 1399px)").matches 


window.addEventListener('scroll', (e)=>{
    movimentarBarco();
    animarGrafico(graficos);
});

setaDireita.forEach((seta) => {
    seta.addEventListener('click', (e) => {
        trocarProjeto('direita');
    });
});   

setaEsquerda.forEach((seta) => {
    seta.addEventListener('click', (e) => {
        trocarProjeto('esquerda');
    });
});   

function movimentarBarco(){
    if(lg){
        barcoX += screen.width/120;
    } else if(md){
        barcoX += screen.width/90;
    }else{
        barcoX += screen.width/40;   
    }
    barco.style.marginLeft = barcoX + "px";
    if(barcoX > screen.width){
        barcoX = -100;
    }
    
    
}

function animarGrafico(graficos){
    if(xl){
        if(window.pageYOffset > 650){
            graficos[0].style.paddingRight = "60%";
            graficos[0].style.transition = "1.5s";
            graficos[1].style.paddingRight = "55%";
            graficos[1].style.transition = "1.6s";
            graficos[2].style.paddingRight = "47%";
            graficos[2].style.transition = "1.7s";
            graficos[3].style.paddingRight = "24%";
            graficos[3].style.transition = "1.8s";
            graficos[4].style.paddingRight = "22%";
            graficos[4].style.transition = "1.9s";
            graficos[5].style.paddingRight = "22%";
            graficos[5].style.transition = "2s";
        }
    } 

    else if(lg){
        if(window.pageYOffset > 670){
            graficos[0].style.paddingRight = "60%";
            graficos[0].style.transition = "1.5s";
            graficos[1].style.paddingRight = "55%";
            graficos[1].style.transition = "1.6s";
            graficos[2].style.paddingRight = "47%";
            graficos[2].style.transition = "1.7s";
            graficos[3].style.paddingRight = "24%";
            graficos[3].style.transition = "1.8s";
            graficos[4].style.paddingRight = "22%";
            graficos[4].style.transition = "1.9s";
            graficos[5].style.paddingRight = "22%";
            graficos[5].style.transition = "2s";
        }
    } 

    else if(md){
        if(window.pageYOffset > 800){
            graficos[0].style.paddingRight = "60%";
            graficos[0].style.transition = "1.5s";
            graficos[1].style.paddingRight = "55%";
            graficos[1].style.transition = "1.6s";
            graficos[2].style.paddingRight = "47%";
            graficos[2].style.transition = "1.7s";
            graficos[3].style.paddingRight = "24%";
            graficos[3].style.transition = "1.8s";
            graficos[4].style.paddingRight = "22%";
            graficos[4].style.transition = "1.9s";
            graficos[5].style.paddingRight = "22%";
            graficos[5].style.transition = "2s";
        }
    } 

    else if(small){
        if(window.pageYOffset > 930){
            graficos[0].style.paddingRight = "60%";
            graficos[0].style.transition = "1.5s";
            graficos[1].style.paddingRight = "55%";
            graficos[1].style.transition = "1.6s";
            graficos[2].style.paddingRight = "47%";
            graficos[2].style.transition = "1.7s";
            graficos[3].style.paddingRight = "24%";
            graficos[3].style.transition = "1.8s";
            graficos[4].style.paddingRight = "22%";
            graficos[4].style.transition = "1.9s";
            graficos[5].style.paddingRight = "22%";
            graficos[5].style.transition = "2s";
        }
    } else{
        if(window.pageYOffset > 300){
            graficos[0].style.paddingRight = "60%";
            graficos[0].style.transition = "1.5s";
            graficos[1].style.paddingRight = "55%";
            graficos[1].style.transition = "1.6s";
            graficos[2].style.paddingRight = "47%";
            graficos[2].style.transition = "1.7s";
            graficos[3].style.paddingRight = "24%";
            graficos[3].style.transition = "1.8s";
            graficos[4].style.paddingRight = "22%";
            graficos[4].style.transition = "1.9s";
            graficos[5].style.paddingRight = "22%";
            graficos[5].style.transition = "2s";
        }
    }
}

function trocarProjeto(direcao){
    if(direcao == 'direita'){
        for(let i = 0; i < projetos.length; i++){
            if(i == projetoAtivo && i != projetos.length-1){
                projetos[projetoAtivo].classList.remove('active');
                projetos[projetoAtivo + 1].classList.add('active');
                projetoAtivo = i+1;
                break;
            }
            else if(i == projetoAtivo && i == projetos.length-1){
                projetos[projetoAtivo].classList.remove('active');
                projetos[0].classList.add('active');
                projetoAtivo = 0;
                break;
            }
        }
    }

    else{
        for(let i = (projetos.length - 1); i >=  0; i--){
            if(i == projetoAtivo && i != 0){
                projetos[projetoAtivo].classList.remove('active');
                projetos[projetoAtivo - 1].classList.add('active');
                projetoAtivo = i-1;
                break;
            }
            else if(i == projetoAtivo && i == 0){
                
                projetos[projetoAtivo].classList.remove('active');
                projetos[projetos.length - 1].classList.add('active');
                projetoAtivo = projetos.length - 1;
                break;
            }
        }
    }
  
}