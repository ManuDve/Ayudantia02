// Variables

const nombrePokemon = document.getElementById("nombre-pokemon");
const tipoPokemon = document.getElementById("tipo-pokemon");
const textoPokemon = document.getElementById("texto-pokemon");
const imagenPokemon = document.getElementById("imagen-pokemon");
const pokemonesIniciales = document.querySelectorAll("img");
const inputNombre = document.getElementById("cambiar-nombre");
const boton = document.getElementById("boton");

let posicionActual = 0;

// Arreglos

let pokemones = [
    ["Bulbasaur", "Planta", "Un pokemon verdecito", "./img/bulbasaur.jpg"],
    ["Charmander", "Fuego", "Un pokemon con una llamita", "./img/charmander.jpg"],
    ["Squirtle", "Agua", "Un pokemon que dice vamo a calmarno'", "./img/squirtle.jpg"]
]

// Funciones

function cambiarContenido(num) {
    nombrePokemon.textContent = pokemones[num][0];
    tipoPokemon.textContent = pokemones[num][1];
    textoPokemon.textContent = pokemones[num][2];
    imagenPokemon.src = pokemones[num][3];
    posicionActual = num;
    console.log(posicionActual)
}


function reemplazarTitulo() {
    pokemones[posicionActual][0] = inputNombre.value;
    cambiarContenido(posicionActual);
}

// Event Listeners


for (let i = 0; i<pokemones.length ; i++) {
    pokemonesIniciales[i].addEventListener("mouseenter", ()=>{
        cambiarContenido(i);
    })
}


boton.addEventListener("click", reemplazarTitulo)

