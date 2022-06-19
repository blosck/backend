const fs = require("fs")

class Contenedor{
    constructor(name){
        this.name = name
    }

    save(Object){ // Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.


    }

    getById(Number){  //  Object - Recibe un id y devuelve el objeto con ese id, o null si no está.

    }

    getAll(){ // Object[] - Devuelve un array con los objetos presentes en el archivo.

    }
    
    deleteById(Number){  //  void - Elimina del archivo el objeto con el id buscado.

    }

    deleteAll(){  //  Elimina todos los objetos presentes en el archivo.


    }
}

const archivo = fs.writeFile('archivo.json', 'Hola', (err) => {
    err ? console.log("Hubo un error creando el archivo") : console.log("El archivo se ha creado correctamente")
})

const catalogo = new Contenedor(archivo)
console.log(archivo);