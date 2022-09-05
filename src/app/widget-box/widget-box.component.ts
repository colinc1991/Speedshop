import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-widget-box',
    templateUrl: './widget-box.component.html',
    styleUrls: ['./widget-box.component.scss']
})
export class WidgetBoxComponent implements OnInit {

    @Input() widgetHeaderTitle: string = "";
    constructor() { }

    ngOnInit(): void {
    }

}
