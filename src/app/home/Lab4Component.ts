import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-lab4',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class lab4component {
    @Input()
    title: string;
    items = [1, 2 ,3 ,4 ,5 ,6 ,7 ,8, 9, 10];
    
    constructor() {}
       
}
