// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

const divHtml=document.body;
const newDiv=document.createElement("div");
divHtml.appendChild(newDiv);


// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const newP=document.createElement("p");
newDiv.appendChild(newP);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.

for(var i=1;i<=6;i++){
    const newPara=document.createElement("p");
    newDiv.appendChild(newPara);
}


// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.

const newText=document.createElement("p")
newText.textContent="Soy dinámico";
newDiv.appendChild(newText);

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector(".fn-insert-here");

h2.textContent = 'Wubba Lubba dub dub';


// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul=document.createElement("ul");
for (const app of apps) {
    const li=document.createElement("li");
    li.textContent=app;
    ul.appendChild(li);
    
}

document.body.appendChild(ul);

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const eliminates=document.querySelectorAll(".fn-remove-me");

for (const eliminate of eliminates) {
    eliminate.remove();
    
}

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const allDiv=document.querySelectorAll("div")
const p=document.createElement("p");
p.textContent="Voy en medio";

document.body.insertBefore(p, allDiv[1]);



// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here

const insertDiv=document.querySelectorAll("div.fn-insert-here");

for (const div of insertDiv) {
    const ps=document.createElement("p");
    ps.textContent="Voy dentro";
    div.appendChild(ps);
    
}