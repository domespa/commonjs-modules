// 1. Importa la tua funzione da names.js
// 2. Importa la tua funzione da hobbies.js

const name = require("./names");
const hobbies = require("./hobbies");

// Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

function newAccount() {
    const fullName = name("pippo", "franco");
    const hobby = hobbies("webdeveloper","muratore","carabiniere");

    return {
        fullName: fullName,
        hobbies: hobby
    };
}

console.log(newAccount());