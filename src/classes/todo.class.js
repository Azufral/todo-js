// Se usa export para poder usarla fuera de este nivel.
// Muestra un UN OBJETO con Mi tarea, id, si está completado o no y la fecha.
// Objetos que contienen la información.
export class Todo {

    // Recuperar instancias que vienen de un objeto
    // Me permite recuperar los métodos que definí en la clase.
    static fromJson( { id, tarea, completado, creado }) {

        const tempTodo = new Todo( tarea );

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }

    constructor ( tarea ) { // Entrada por el usuario: Lo que necesito hacer.

        this.tarea = tarea;

        this.id         = new Date().getTime(); // 123123812
        this.completado = false;
        this.creado     = new Date();
    }

    imprimirClase() {
        console.log( `${ this.area } - ${ this.id }` );
    }
}

