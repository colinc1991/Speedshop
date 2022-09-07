import { Component, Input, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-custom-select',
    templateUrl: './custom-select.component.html',
    styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {

    @Input() values: string[] = [];
    faChevronDown = faChevronDown;
    displayDropdown: boolean = false;
    selectedItem: string;

    constructor() { }

    ngOnInit(): void {
        this.selectedItem = this.values[0];
    }

    onSelectClick(){
        this.displayDropdown = !this.displayDropdown;
    }

    onValueClick(selectedValue: string){
        this.selectedItem = selectedValue;
    }

}
