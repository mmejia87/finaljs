String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character+ this.substr(index+character.length); }

const palabras = ['casa', 'perro', 'gato', 'elefante'];

const palabra = palabras[Math.floor(Math.random()*palabras.length)];

let palabraConGuiones = palabra.replace(/./g, "_ ");
let contadorFallos = 0 

document.querySelector('#output').innerHTML = palabraConGuiones;
document.querySelector('#calcular').addEventListener('click', () =>
{ 
    const letra = document.querySelector('#letra').value;
    
    let haFallado = true;

    for(const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
            haFallado = false;
        }
    }

    if(haFallado){
        contadorFallos++;
        document.querySelector('#game').style.backgroundPosition = -(204*contadorFallos) + 'px 0';
        if(contadorFallos == 4){
            alert("PERDISTE!!")
        }
    }

    document.querySelector('#output').innerHTML = palabraConGuiones; 
});
