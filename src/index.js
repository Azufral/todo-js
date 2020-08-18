import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();

// El primer argumento del callback está llamando a la funcion "crearTodoHtml"
// Funciona solo con un argumento.
todoList.todos.forEach( crearTodoHtml );


console.log( 'todos', todoList.todos );

//const tarea = new Todo( 'Aprender JavaScript' );
//todoList.nuevoTodo( tarea );

// tarea.completado = true;

//console.log( todoList );

//crearTodoHtml( tarea );

// Solo funciona cuando va a destinada a la web/Frontend
// LocalStorage: La info no posee tiempo de expiración//Es visible por el usuario final
// Session storage: SE PURGA O BORRA TODO cuando actualice la web.
// localStorage.setItem('mi-key', 'ABC123') // Unicamente string.
// sessionStorage.setItem('mi-key', 'ABC123') // Unicamente string.

/* setTimeout( () => {
    localStorage.removeItem( 'mi-key' );
}, 1500 ); */
