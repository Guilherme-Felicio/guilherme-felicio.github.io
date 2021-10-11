let graficos = document.querySelectorAll(".grafico");
const small = window.matchMedia("(min-width: 576px)").matches
const md = window.matchMedia("(min-width: 766px)").matches 
const lg = window.matchMedia("(min-width: 991px)").matches 
const xl = window.matchMedia("(min-width: 1199px)").matches 
const xxl = window.matchMedia("(min-width: 1399px)").matches 

window.addEventListener('scroll', (e)=>{
    console.log(window.pageYOffset );


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
});