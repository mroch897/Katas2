// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const showme=document.querySelector(".showme");
console.log(showme.textContent)


// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado


    // Seleccionar el h1 con el id pillado
    const pilladoHeading = document.querySelector('#pillado');

    // Mostrar por consola el contenido del h1
    console.log(pilladoHeading.textContent);


// 1.3 Usa querySelector para mostrar por consola todos los p

const parrafos=document.querySelectorAll("p");

for (const parrafo of parrafos) {
    console.log(parrafo.textContent);
    
}

// 1.4 Usa querySelector para mostrar por consola todos los elementos con 
// la clase.pokemon

const pokemonClass=document.querySelectorAll(".pokemon");

for (const pokemon of pokemonClass) {
    console.log(pokemon.textContent)
}
// 1.5 Usa querySelector para mostrar por consola todos los elementos con 
// el atributo data-function="testMe".

const elementosConAtributo = document.querySelectorAll('[data-function="testMe"]');

for (const elementos of elementosConAtributo) {
    console.log(elementos.textContent);
    
}



// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".

const personaje = document.querySelectorAll('[data-function="testMe"]');

for (const personajes of personaje) {
    console.log(personaje[1].textContent);
    
}



// const personajesArray = Array.from(personaje);

// console.log(personajesArray[2].textContent);
