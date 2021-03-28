import { Component, Input } from '@angular/core';
import { Task } from '../task';

@Component({
    selector: 'app-tasklist',
    templateUrl: './tasklist.component.html',
    styleUrls: ['./tasklist.component.css']
})

export class TaskListComponent {
    @Input()
    task: Task;
    constructor() {}
    
    ngOnInit() {}

       
}
