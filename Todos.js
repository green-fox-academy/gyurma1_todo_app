import fs from 'fs';
export class Todos{
#arrTodos=[];
constructor(){
    
}
readTodos(){
    fs.readFile('./Data/todos.json', 'utf8', (err, data) => {

        if (err) {
            console.log(`Error reading file from disk: ${err}`);
        } else {
    
            // parse JSON string to JSON object
            this.#arrTodos = JSON.parse(data);
    
            for (let i = 0; i < this.#arrTodos.length; i++) {
                console.log('1 -',String(Object.values(this.#arrTodos[i])));
                
            }
            
        }
    
    });



// let fileContent;
// try {
//   fileContent = fs.readFileSync('./Data/todos.json', 'utf-8');
//   this.#arrTodos=fileContent;
// } catch (err) {
//   console.error(err);
// }


}
}