//botones inferiores
let btnyo =document.getElementById("btnyo");   
let btnlinkedin = document.getElementById("btnlinkedin");
let btnproyectos = document.getElementById("btnproyectos");
let masproyectos = document.getElementById("masproyectos");

let btnmasproyectos = document.getElementById("btnmasproyectos");
let proyectos2 = document.getElementById("proyectos2");

function mostrarsobremi(){
   let sobremi = document.getElementById("descripcion");
   let linkedin = document.getElementById("cardlinkedin");
   let cardproyecto = document.getElementsByClassName("cardproyecto");
   sobremi.style.display="flex";
   linkedin.style.display="none";
   cardproyecto[0].style.display="none";
   cardproyecto[1].style.display="none";
   cardproyecto[2].style.display="none";
   cardproyecto[3].style.display="none";
   cardproyecto[4].style.display="none";
   cardproyecto[5].style.display="none";
   masproyectos.style.display="none";
   proyectos2.style.display="none";
}

function mostrarlinkedin(){
    let linkedin = document.getElementById("cardlinkedin");
    let sobremi = document.getElementById("descripcion");
    let cardproyecto = document.getElementsByClassName("cardproyecto");
    sobremi.style.display="none";
    linkedin.style.display="flex";
    cardproyecto[0].style.display="none";
    cardproyecto[1].style.display="none";
    cardproyecto[2].style.display="none";
    cardproyecto[3].style.display="none";
    cardproyecto[4].style.display="none";
    cardproyecto[5].style.display="none";
    masproyectos.style.display="none";
    proyectos2.style.display="none";
}

function mostrarproyectos(){
    let cardproyecto = document.getElementsByClassName("cardproyecto");
    let linkedin = document.getElementById("cardlinkedin");
    let sobremi = document.getElementById("descripcion");
   
    
    sobremi.style.display="none";
    linkedin.style.display="none";
    cardproyecto[0].style.display="flex";
    cardproyecto[1].style.display="flex";
    cardproyecto[2].style.display="flex";
    cardproyecto[3].style.display="flex";
    cardproyecto[4].style.display="flex";
    cardproyecto[5].style.display="flex";
    masproyectos.style.display="flex";
    proyectos2.style.display="none";
    cardproyecto2[0].style.display="none";
    cardproyecto2[1].style.display="none";
    cardproyecto2[2].style.display="none";
}

function mostrarproyectossecundarios(){
    let cardproyecto = document.getElementsByClassName("cardproyecto");
    let linkedin = document.getElementById("cardlinkedin");
    let sobremi = document.getElementById("descripcion");
    let proyectos2 = document.getElementById("proyectos2");
    let cardproyecto2 = document.getElementsByClassName("cardproyecto2");
    
    sobremi.style.display="none";
    linkedin.style.display="none";
    cardproyecto[0].style.display="none";
    cardproyecto[1].style.display="none";
    cardproyecto[2].style.display="none";    
    cardproyecto[3].style.display="none";
    cardproyecto[4].style.display="none";
    cardproyecto[5].style.display="none";
    masproyectos.style.display="none";
    proyectos2.style.display="flex";

    cardproyecto2[0].style.display="flex";
    cardproyecto2[1].style.display="flex";
    cardproyecto2[2].style.display="flex";


}

btnproyectos.addEventListener("click", mostrarproyectos);
btnyo.addEventListener("click", mostrarsobremi);
btnlinkedin.addEventListener("click", mostrarlinkedin);

btnmasproyectos.addEventListener("click", mostrarproyectossecundarios)