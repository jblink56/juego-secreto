
let numeroSecreto = 0;
let intentos = 0;
let listaDeNumeros = [];
let numeroMaximo = 10;


function asignarTexto (elemento, texto){

elementoTexto = document.querySelector(elemento);
elementoTexto.innerHTML =texto;

}

function generarNumeroSecreto(){
    let numeroGenarado = parseInt(Math.floor(Math.random()* numeroMaximo)+1);
    console.log(numeroGenarado);
    console.log(listaDeNumeros);

    if( listaDeNumeros.length == numeroMaximo){
        asignarTexto('h1','ya todos los números posibles');
    }else{
    if(listaDeNumeros.includes(numeroGenarado)){

        return generarNumeroSecreto();
    }else{
        listaDeNumeros.push(numeroGenarado);
        return numeroGenarado;
    }
    }
   }
   

function vierficarIntento(){
    
    let numeroUsuario = document.getElementById('valorUsuario').value;


    if (numeroUsuario == numeroSecreto ){
        asignarTexto('p',`Acertaste el número secreto en ${intentos} ${(intentos === 1)? 'intento':'intentos'}`);
       
        document.querySelector('#reiniciar').removeAttribute('disabled');

    }else{
        if(numeroUsuario > numeroSecreto){
            asignarTexto('p','El número secreto es menor');
        }else{
            asignarTexto('p','El número secreto es mayor');
        }
    }
        intentos++;
        limpiarCaja();

        return;
}

function limpiarCaja(){
    let vaciarCaja = document.querySelector('#valorUsuario').value ='';
    /* otra forma de darle un valor
    vaciarCaja.value ='';
    */
}

function condisionesIniciales(){
    asignarTexto('h1','Bienvenido al juego del número secreto');
    asignarTexto('p',`Escoja un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}
function reintentar(){
 limpiarCaja();

 condisionesIniciales();

 document.getElementById('reiniciar').setAttribute('disabled', 'true');
}
    

condisionesIniciales();