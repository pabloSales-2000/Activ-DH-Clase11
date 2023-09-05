const hotToys = require ("./datos/figuras1.json");
const bandai = require ("./datos/figuras2.json");
const starWars = require ("./datos/figuras3.json");


function importar(marca){

    if(marca == hotToys[1].marca){
        return hotToys;
    }else if(marca == bandai[1].marca){
        return bandai;
    }else if(marca == starWars[1].marca){
        return starWars;
    }else{
        console.log("la marca ingresada no es valida");
    }
}

//console.log(importar("HotToys")); --> Esta linea se ejecutara en otros archivos tambien

module.exports = importar;