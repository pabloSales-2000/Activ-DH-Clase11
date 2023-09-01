const importar = require("./collectibles");

const hotToys = importar("HotToys");
    
const bandai = importar("Bandai");
    
const starWars = importar("Star Wars");

const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

const collectibles = {

    figuras: unifiedCollectibles,

    listFigures: function(){
        this.figuras.forEach((figura) => {
            console.log(figura);
        })
    },

    figuresByBrand: function(marca) {
        return this.figuras.filter(figura => figura.marca == marca);
    }
    
}