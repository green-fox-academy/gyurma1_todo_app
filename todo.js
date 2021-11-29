'use strict'
// import fs from 'fs';
// import minimist from 'minimist';
// import { stringify } from 'querystring';


export class Todo {
    todo = "";
    arranged;

    constructor(todo, arranged = false) {
        this.todo = String(todo);
        this.arranged = arranged;
    }

    setArranged() {
        this.arranged = true;
    }

}