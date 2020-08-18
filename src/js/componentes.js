import { Todo } from "../classes";

import { todoList } from '../index';

// Referencias en el HTML
const divTodoList   = document.querySelector( '.todo-list' );
// Creamos la constante para crear referencia al input/EVENTO/EventListener.
const txtInput      = document.querySelector( '.new-todo' );
const btnBorrar     = document.querySelector( '.clear-completed' );
const ulFiltros     = document.querySelector( '.filters' );
const anchorFiltros = document.querySelectorAll( '.fitro' );

// Método para crear en el HTML el todo
// parecido al que tenemos en el index.js
// Recibo un todo( Actividad por hacer )
// Regresa el elemento HTML y en otro lugar realiza la inserción
export const crearTodoHtml = ( todo ) => {
    // BackTick: Para hacer interpolación de strings, igual strings multilínea. // data-id: Al hacer click en la X me devolverá el id para poderlo eliminar.
    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' } >
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    // Creo el elemento HTML
    const div = document.createElement( 'div' );
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;
}

// EVENTOS
// keyup: Cuando la persona suelta la tecla disparo una acción{ ... }
// El event es la tecla que nos dice que tecla presionó el usuario.
// value: Me dice lo que escribió // keyCode: la tecla presionada.
// console.log(event); Para ver el key y demás propiedades.
// Condicion para que no inserte caracteres vacios
txtInput.addEventListener('keyup', ( event ) => {

    if ( event.keyCode === 13 && txtInput.value.length > 0 ) {
        
        console.log( txtInput.value );
        // Añadimos el nuevo todo al arreglo de todoList
        const nuevoTodo = new Todo( txtInput.value ); // value: texto ingresado o valor ingresado.
        todoList.nuevoTodo( nuevoTodo );

        // Para que aparezca en el HTML
        crearTodoHtml( nuevoTodo );
        // Para borrar lo que acabo de escribir
        txtInput.value = '';
    }

});

divTodoList.addEventListener('click', (event) => {
    // console.log(event.target.localName); // localName Para saber exactamente que elemento fue.
    
    const nombreElemento = event.target.localName;// input, label, button
    // Destruimos el elemento "<li>" del HTML
    // event.target.parentElement.parentElement; Añadiendo parentElement ingresa a los elementos hijo.
    const todoElemento   = event.target.parentElement.parentElement;
    const todoId         = todoElemento.getAttribute( 'data-id' ); // Podemos obtener clases, ids ....

    if ( nombreElemento.includes('input') ){ // Hizo click en check
        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle( 'completed' ); // Para hacer referencia a todas las clases // toggle para agregar o cambiar clases.
    } else if ( nombreElemento.includes('button') ){ // Si incluye el botón, entonces hay que borrar el todo.
        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento );
    }
});

btnBorrar.addEventListener('click', () => {

    todoList.elminarCompletados();

    // Se eliminan de abajo hacia arriba // for INVERSO
    // pregunto si el elemento que barro está completado o no y si está.. lo borra.
    for ( let i = divTodoList.children.length - 1; i >= 0; i-- ){ // Para empezar en la última posición

        const elemento = divTodoList.children[i];

        if ( elemento.classList.contains('completed') ) {
            divTodoList.removeChild(elemento);
        }

    }
});

ulFiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;
    if ( !filtro ){ return; }

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for( const elemento of divTodoList.children ) {
        elemento.classList.remove( 'hidden' );
        const completado = elemento.classList.contains( 'completed' );

        switch( filtro ) {

            case 'Pendientes':
                if( completado ) {
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if( !completado ) {
                    elemento.classList.add('hidden');
                }
            break;

        }

    }


    // Switch para varias decisiones.

});

















