// Javascript document
/*
Ejemplo de Javascript en el curso
para practicas.
*/
/*function saludo() {
    alert("hola mundo desde javascript en un archivo independiente");
}
*/
// crear arreglos o listas en javascript
/*
var arreglo = ['html',15,true]
console.log(arreglo[0])
*/

//objetos en javascript
/*
var objeto = {
    nombre: "html",
    duracion: 15,
    estado: true,
    capitulos: {
        nombre: "introduccion",
        videos: 20
    }
}
console.log(objeto.capitulos.nombre);
*/
var arraydeobjetos = [
    {
        nombre: 'html',
        estad: true
    },
    {
        nombre: 'CSS',
        estad: true
    },
    {
        nombre: 'javascript',
        estad: false
    },
]
//console.log(arraydeobjetos[0])
//console.log(arraydeobjetos[1])
//console.log(arraydeobjetos[2])

//Crear un for loop en javascript
for (let i of arraydeobjetos) {
    console.log(i)
}

