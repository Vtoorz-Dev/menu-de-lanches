let lista = [];

function addLancheNoFinal(lista, lanches){
    lista.push(lanches);
    console.log(`${lanches} added to the end of the lunch menu.`);
    return lista;
}

function addlancheNocomeco(lista, Sopa){
    lista.unshift(Sopa);
    console.log(`${Sopa} added to the start of the lunch menu.`);
    return lista
}

function removePrimeiroLanche(lista){
    if (lista.length === 0){
        console.log("No lunches to remove.");
    } else {
        lista.shift();
        console.log("[ITEM] removed from the start of the lunch menu.");
    }
    return lista;
}

function removeUltimoLanche(lista){
    if (lista.length === 0){
        console.log("No lunches to remove.");
    } else {
        lista.pop();
         console.log(`[ITEM] removed from the end of the lunch menu.`);
         return lista;
    }
}
function mostrarMenu(){
    console.log('nosso menu', lista);
    return lista;
}

addLancheNoFinal(lista, "Pizza");
addlancheNocomeco(lista, "Sopa");
mostrarMenu();