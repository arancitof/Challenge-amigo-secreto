// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/* Guardar los nombres */
let amigos = [];

/* Capturar el valor del input */
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();
    /* Validar la Entrada */
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre')
        return;
    }
    /* Actualizar array amigos */
    amigos.push(nombreAmigo);
    /* Limpiar compo de entrada */
    document.getElementById('amigo').value = '';``
    /* Debbug para ver el Array */
    console.log(amigos);
    /* Llamada de la función para mostrar los nombres */
    mostrarNombres();
}


/* Mostrar los nombres en la lista */
function mostrarNombres() {
    /* Obtener el elemento de la lista */
    const listaAmigos = document.getElementById('listaAmigos');
    /* Limpiar la lista existente */
    listaAmigos.innerHTML = '';
    /* Iterar el arreglo */
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

/* Función para sortear un amigo */
function sortearAmigo() {
    /* Validar que hay amigos disponibles */
    if (amigos.length == 0){
        alert('No hay amigos para sortear, por favor ingresa un amigo')
        return;
    }
    /* Generar un indice aleatorio */
        let numeroSorteado = Math.floor(Math.random()*amigos.length);
        console.log(numeroSorteado);

    /* Obtener el nombre sorteado */
        let amigoSorteado = amigos[numeroSorteado]
        
        /* Mostrar el resultado */
document.getElementById('resultado').innerHTML = `El amigo sorteado es:${amigoSorteado}`;
        
    }


