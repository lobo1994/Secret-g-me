let numeroSecreto = 0 
let intentos = 0;
let listaNumerosSorteados = [];
let numerosMaximos = 10; 

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto; 
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    console.log(intentos);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero ${intentos} ${(intentos===1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    }
    else{ 
        //el ususario no acerto
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','el numero secreto es menor'); 
        }
        else{
            asignarTextoElemento('p','el numero es secreto es  mayor');
        }
        intentos++;
        limpiarCaja();

    }
    return;
}
function limpiarCaja(){

    let valorCaja=document.querySelector('#valorUsuario').value='';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numerosMaximos)+1;
    //si el numero generado esta incluido en la lista 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length==numerosMaximos){
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles '); 

    }
    else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;

        }
    }

}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Game Of The Secret Number');
    asignarTextoElemento('p', `Indica un Numero del 1 al ${numerosMaximos}`);
    numeroSecreto = generarNumeroSecreto();
    intentos= 1; 
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros 
    condicionesIniciales();
    //generar numero aleatorio
    
    //deshabilitar boton 
    document.querySelector('#reiniciar').setAttribute('disabled','true');

    //inicializar intentos
     
}
condicionesIniciales();
console.log(numeroSecreto)