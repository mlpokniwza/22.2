import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css']
})

export class ToDoListComponent {
    @Input()
    title: string;
    array = ['readManga'];

    addArray() {
        this.array.push(this.title);
    }

    constructor() {}
    removeArray(i) {
        this.array.splice(i, 1)
    }
       
}
