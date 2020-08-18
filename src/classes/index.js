// CONTIENE TODAS LAS REFERENCIAS A TODAS LAS CLASES.
// Este archivo agrupa todas mis clases de mi carpeta "classes"
// Para importar desde un único lugar centralizado de importaciones de clases.


// Primero: Importo cada uno de mis archivos.
import { Todo } from './todo.class';
import { TodoList } from './todo-list.class';

// Segundo: Exporto cada uno de los archivos importados anteriormente.
export {
    Todo,
    TodoList
}