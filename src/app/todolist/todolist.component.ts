import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css']
})

export class ToDoListComponent {
    @Input('name') name: string;
    @Input('description') description: string;
    
    id = 1;
    array = [ 
        {
            id:1,
            name: "kay",
            description: "fuck you"
        }
    ];

    addArray() {
        this.array.push({
            id: this.id,
            name: this.name,
            description: this.description
        });
    }

    constructor() {}
    removeArray(i) {
        this.array.splice(i, 1)
    }
       
}
