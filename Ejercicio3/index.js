// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul=document.createElement("ul");

for (const countrie of countries) {
    const li=document.createElement("li");
    li.textContent=countrie;
    ul.appendChild(li);
    
}

document.body.appendChild(ul);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const eliminar = document.querySelector(".fn-remove-me");
eliminar.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
 const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

 const ul1=document.createElement("ul");

for (const car of cars) {
    const li=document.createElement("li");
    li.textContent=car;
    li.setAttribute("data-function", "printHere");
    ul.appendChild(li);
    
}

document.body.appendChild(ul1);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
 const countries1 = [
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
 ];

for (const country of countries1) {
    const div= document.createElement("div");
    const h4= document.createElement("h4");
    const img= document.createElement("img");

    h4.textContent=country.title;
    img.src=country.imgUrl;

    div.appendChild(h4);
    div.appendChild(img);
    document.body.appendChild(div);
    
}
// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.

const newButton=document.createElement("button");
newButton.textContent="Eliminar";

function eliminarDiv(){
    const allDivEliminar=document.querySelectorAll("div");
    allDivEliminar[allDivEliminar.length-1].remove();
}

newButton.addEventListener("click", eliminarDiv);
document.body.appendChild(newButton);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.

const allDivEliminar2=document.querySelectorAll("div");

for (const div of allDivEliminar2) {
    const button = document.createElement("button");
    button.textContent = "Elimina!"
    button.addEventListener("click", (e) => e.target.parentElement.remove())
    div.appendChild(button);
    
}



