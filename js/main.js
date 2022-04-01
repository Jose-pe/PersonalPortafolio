//botones inferiores
console.log("estamosaqui");
let btnyo =document.getElementById("btnyo");   
let btnlinkedin = document.getElementById("btnlinkedin");
let btnproyectos = document.getElementById("btnproyectos");
let masproyectos = document.getElementById("masproyectos");
function mostrarsobremi(){
   let sobremi = document.getElementById("descripcion");
   let linkedin = document.getElementById("cardlinkedin");
   let cardproyecto = document.getElementsByClassName("cardproyecto");
   sobremi.style.display="flex";
   linkedin.style.display="none";
   cardproyecto[0].style.display="none";
   cardproyecto[1].style.display="none";
   cardproyecto[2].style.display="none";
   masproyectos.style.display="none";
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
    masproyectos.style.display="none";
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
    masproyectos.style.display="flex";
}
btnproyectos.addEventListener("click", mostrarproyectos);
btnyo.addEventListener("click", mostrarsobremi);
btnlinkedin.addEventListener("click", mostrarlinkedin);