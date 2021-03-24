import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-newbar',
    templateUrl: './newbar.component.html',
    styleUrls: ['./newbar.component.css']
})

export class NewbarComponent {
    @Input()
    title: string;
    constructor() {}
}
