import fs from 'fs';
import { Todo } from './Todo.js';
export class Todos {
    #arrTodos = [];
    constructor() {

    }
    readTodos() {
        fs.readFile('./Data/todos.json', 'utf8', (err, data) => {

            if (err) {
                console.log(`Error reading file from disk: ${err}`);
            } else {

                // parse JSON string to JSON object
                if (data == '') {
                    console.log('Nincs mára tennivalód! :)')
                } else {
                    this.#arrTodos = JSON.parse(data);
                    let numb = 0;
                    for (let i = 0; i < this.#arrTodos.length; i++) {
                        if (this.#arrTodos.length == 0) {
                            console.log('Nincs mára tennivaló.')
                        }
                        numb++;
                        console.log(`${numb} -`, String(Object.values(this.#arrTodos[i])));

                    }
                }



            }

        });

    }

    addTodos(todoObj) {


        // read the file
        fs.readFile('./Data/todos.json', 'utf8', (err, data) => {

            if (err) {
                console.log(`Error reading file from disk: ${err}`);
            } else {

                // parse JSON string to JSON object
                const databases = JSON.parse(data);

                // add a new record
                databases.push(todoObj);

                // write new data back to the file
                fs.writeFile('./Data/todos.json', JSON.stringify(databases, null, 4), (err) => {
                    if (err) {
                        console.log(`Error writing file: ${err}`);
                    } else {
                        console.log('New todo wrote.')
                    }
                });
            }

        });
    }
    removeTodos(num) {
        let newNum = num[0];
        newNum--;
        // read the file
        fs.readFile('./Data/todos.json', 'utf8', (err, data) => {

            if (err) {
                console.log(`Error reading file from disk: ${err}`);
            } else {

                // parse JSON string to JSON object
                const databases = JSON.parse(data);
                if (num[0] > databases.length) {
                    console.error('Nem lehetséges az eltávolítás:túlindexelés miatt.');
                } else{
                    // delete a record;
                    databases.splice(newNum, 1);

                // write new data back to the file
                fs.writeFile('./Data/todos.json', JSON.stringify(databases, null, 4), (err) => {
                    if (err) {
                        console.log(`Error writing file: ${err}`);
                    } else {
                        console.log(`Az ${num}számú elem törölve lett.`)
                    }
                });
            }
            }

        });

    }
    arrangedTodos(num) {
        let newNum = num[0];
        newNum--;
        // read the file
        fs.readFile('./Data/todos.json', 'utf8', (err, data) => {

            if (err) {
                console.log(`Error reading file from disk: ${err}`);
            } else {

                // parse JSON string to JSON object
                const databases = JSON.parse(data);
                const todoArray = [];
                for (let i = 0; i < databases.length; i++) {
                    const obj = databases[i];
                    const newTodo = new Todo(obj.todo, obj.arranged);
                    todoArray.push(newTodo);
                }

                // set arranged;

                todoArray[newNum].setArranged();

                // write new data back to the file
                fs.writeFile('./Data/todos.json', JSON.stringify(todoArray, null, 4), (err) => {
                    if (err) {
                        console.log(`Error writing file: ${err}`);
                    } else {
                        console.log(`Az ${num}számú elem elintézve :).`)
                    }
                });
            }

        });
    }

}
