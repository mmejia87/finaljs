String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character+ this.substr(index+character.length); }

const palabras = ['leon','oso','elefante','cerdo'];

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
            // alert("PERDISTE!! intentalo de nuevo")
            Swal.fire({
                title: 'Perdiste!!',
                text: "Vuelve a intentarlo",
                icon: 'error',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Buena Suerte!',
                  )
                }
              })
        }
    }else{
        if(palabraConGuiones.indexOf('_')<0){
            //  document.querySelector('#ganador').style.display = 'flex';
            Swal.fire(
                'Ganaste!',
                'Volver a Jugar??',
                'success'
              )
            
        }
    }

    document.querySelector('#output').innerHTML = palabraConGuiones; 
    document.querySelector('#letra').value = '';
    document.querySelector('#letra').focus();
    
});


