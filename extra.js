const array = [1,2,3,4,5,6,7,8,9,10];

let [pos0, ,pos2, ,pos4, ...resto] = array;

let [, pos1, , pos3] = array;

const nuevoArray = [pos1,pos3,...resto];

console.log(pos0,pos2,pos4);
console.log(nuevoArray);

const mascota = {
    nombre: "Chica",
    tipo: "gata",
    color: "blanco",
    raza: "de procedencia callejera"
}

let {nombre, tipo:especie, color, raza} = mascota;

console.log(`Hola les presento a mi mascota su nombre es: ${nombre}, es una hermosa ${especie}, de color ${color} y su raza es: ${raza}`);

