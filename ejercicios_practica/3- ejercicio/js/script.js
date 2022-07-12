"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

Copiar del ejercicio anterior todos los objetos de tipo de pokemon
que ha generado.
Utilice ese objetos para crear una tarjeta de descripción de cada uno,
agregue esa información al HTML utilizando "innerHTML" como se vio
en los últimos ejemplos de clase.

*/


// Template para que utilice:

const pokemon = [
    {
        "titulo" : "Tipo agua",
        "descripcion" : "Los Pokémon tipo agua se dice que son puro y que suelen adaptarse a cualquier situación o condición climática, ya que el agua puede adoptar cualquier forma en cualquier momento. Por ejemplo, en un vaso adopta una forma, mientras que, en un cubo, adopta otra distinta. Por eso, los Pokémon de tipo agua se sienten a menudo libres en cualquier sitio donde haya agua a su disposición.",
        "icono" : "./images/water_type.png",
        "estiloClase" : "agua"
    },

    {
        "titulo" : "Tipo planta",
        "descripcion" : "Los Pokémon de tipo planta suelen ser pacíficos y les gusta cuidar de las flores y a los demás, pero también son grandes luchadores y pueden envenenar, paralizar o dormir al rival en combate",
        "icono" : "./images/grass_type.png",
        "estiloClase" : "planta"
    },

    {"titulo" : "Tipo electricidad",
    "descripcion" : "Los Pokémon de tipo eléctrico tienen hábitats variados, desde bosques y praderas, hasta ciudades y centrales eléctricas. Los Pokémon de tipo dragón, eléctrico y planta son resistentes al tipo eléctrico, y aún más los de tipo tierra, quienes son inmunes a los ataques eléctricos. Por consiguiente, los Pokémon eléctricos deben de ser muy precavidos con los ataques de tipo tierra, el cual representa su única debilidad.",
    "icono" : "./images/electric_type.png",
    "estiloClase" : "electricidad"
    },

    {"titulo" : "Tipo normal",
    "descripcion" : "Los Pokémon de tipo normal abarcan la mayor cantidad y variedad de movimientos que el resto de tipos. Gran parte de estos son movimientos que no realizan daño o no lo hacen directamente, sino que afectan a las características o estados del Pokémon. Los tipos normal son los más diversos entre los Pokémon, con características variadas, desarrollos y requisitos para las evoluciones diferentes de cada uno, al igual que diferir en las zonas donde se pueden capturar, desde bosques, cuevas, montañas, ciudades, etc.",
    "icono" : "./images/normal_type.png",
    "estiloClase" : "normal"
    },

    {"titulo" : "Tipo fuego",
    "descripcion" : "Los Pokémon de tipo tipo fuego basan sus ataques, principalmente, en el control de este elemento; y la mayoría pueden quemar al Pokémon oponente, mientras que ellos no sufren quemaduras. Son apasionados y, algunos, de mal carácter (como el Charizard de Ash); viven en cuevas o zonas rocosas y muy áridas; y, más probable, aun cerca de volcanes activos. Sin embargo, los únicos Pokémon que aparentemente suelen andar por lugares verdes como las praderas, son Ponyta y Rapidash, pudiendo ser que estos lugares les permiten galopar sin obstáculos. También, algunos son más dóciles, como Growlithe, Vulpix y sus respectivas evoluciones.",
    "icono" : "./images/fire_type.png",
    "estiloClase" : "fuego"
    }

]

let accumudador = ""
for(const tarjeta of pokemon){
    accumudador +=
    `
    <article class="${tarjeta.estiloClase}">
        <div class="header">
            ${tarjeta.titulo}
        </div>            
        <div>
            <p id="descripcion">
                ${tarjeta.descripcion}
        </p>
    </div>
    <img
    src="${tarjeta.icono}"
    class="icon-type"
    alt="icon type"
    />
    </article>
    `
};

const section = document.querySelector("section");
section.innerHTML = accumudador;