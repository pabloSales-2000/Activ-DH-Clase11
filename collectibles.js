function importar(...marcas){
    return marcas.map((marca) => {
        const hotToys = require ("./datos/figuras1.json");
        const bandai = require ("./datos/figuras2.json");
        const starWars = require ("./datos/figuras3.json");

        if(marca == hotToys[1].marca){
            return hotToys;
        }else if(marca == bandai[1].marca){
            return bandai;
        }else if(marca == starWars[1].marca){
            return starWars;
        }else{
            console.log("la marca ingresada no es valida");
        }
    })
}

module.exports = importar;