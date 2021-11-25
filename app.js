import { Todo } from "./Todo.js";
import { Todos } from "./Todos.js";


const args = process.argv.slice(2);
//console.log(process.argv);
//console.log(args);


if (args.includes('-l')) {
    const newTodos = new Todos();
    newTodos.readTodos();
    // console.log('listing');
    // console.log(args[1]);
    //file beolv
    //json parsolas--rawtodolist
    //rawtodolist---todolist=[Todo{},Todo{}]
} else if (args.includes('-a') ){
    const newTodos = new Todos();
    let str=process.argv.slice(3);
    const newTodo = new Todo(str);
    newTodos.addTodos(newTodo);
    
}
else {
    console.log(`Parancssori Todo applikáció
=============================
Parancssori argumentumok:
    -l   Kilistázza a feladatokat
    -a   Új feladatot ad hozzá
    -r   Eltávolít egy feladatot
    -c   Teljesít egy feladatot`);

}