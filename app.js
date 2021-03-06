import { Todo } from "./Todo.js";
import { Todos } from "./Todos.js";


const args = process.argv.slice(2);

// console.log(process.argv,'argv');
// console.log(args,'args');
if (!(args.includes('-l') || args.includes('-a') ||
    args.includes('-r') || args.includes('-c'))) {
    console.error('Nem támogatott argumentum típus.');
    console.log(`Parancssori Todo applikáció
=============================
Parancssori argumentumok:
    -l   Kilistázza a feladatokat
    -a   Új feladatot ad hozzá
    -r   Eltávolít egy feladatot
    -c   Teljesít egy feladatot`);
}
else {
    if (args.includes('-l')) {
        const newTodos = new Todos();
        newTodos.readTodos();

    } else if (args.includes('-a')) {
        const newTodos = new Todos();
        let str = process.argv.slice(3);
        if (str.length == 0) {
            console.log('Nem lehetséges új feladat hozzáadása: nincs megadva feladat');
        } else {
            const newTodo = new Todo(str);
            newTodos.addTodos(newTodo);
        }

        //töröl egy elemet
    } else if (args.includes('-r')) {
        let str = process.argv.slice(3);

        if (str.length == 0) {
            console.error('Nem lehetséges az eltávolítás:nem adott meg indexet.')
        } else if (isNaN(str[0])) {

            console.error('Nem lehetséges az eltávolítás:a megadott index nem szám.')
        }
        else {
            const newTodos = new Todos();
            newTodos.removeTodos(str);
        }
    } else if (args.includes('-c')) {
        //teljesít egy feladatot
        let str = process.argv.slice(3);
        if (str.length == 0) {
            console.log('Nem lehetséges a feladat végrehajtása:nem adtál meg indexet.')
        } else {
            const newTodos = new Todos();
            newTodos.arrangedTodos(str);
        }
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
}