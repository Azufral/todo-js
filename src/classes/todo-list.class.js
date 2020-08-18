
// Lista de tareas por hacer.
// Agrupa la lista por hacer.

import { Todo } from "./todo.class";

export class TodoList {

    constructor() {
        // Maneja toda la lista de mis tareas.
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ) {
        // Inserta mi tarea al arreglo anterior.
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ) {
        this.todos = this.todos.filter( todo => todo.id != id ) // Excluyendo el que coincida
        this.guardarLocalStorage();
    }
    // Dependiendo del "id", hago la busqueda en el arreglo de "todos"
    // y si está como completado se marca como "no completado" y viceversa.
    // for para barrer el arreglo
    marcarCompletado( id ) {
        // Evalua si el id de los "todo" conincide con el id recibido en tonces ese se debe cambiar.
        for ( const todo of this.todos ) {

           // console.log( id, todo.id );
            if( todo.id == id ) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }
    // No recibe nada porque ya tenemos una instancia que recibe todos mis "todos".
    // Barre el arreglo y elimina todo lo que tenga "todo true".
    elminarCompletados() {
        this.todos = this.todos.filter( todo => !todo.completado )
        // Cuando eliminamos un todo, se debe guardar en el LocalStorange.
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage() { // Cargar todos almacenados previamente

        //if( localStorage.getItem('todo') ) {

        //    this.todos = JSON.parse(localStorage.getItem('todo'));

        //    console.log('cargarLocal', this.todos);
        // }else {
        //    this.todos = [];
        // }
        this.todos = ( localStorage.getItem('todo') )
                        ? JSON.parse( localStorage.getItem('todo') )
                        : [];

        this.todos = this.todos.map( Todo.fromJson );
    }

}