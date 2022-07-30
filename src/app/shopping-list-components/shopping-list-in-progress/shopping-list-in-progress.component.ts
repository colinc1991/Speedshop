import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { PantryItem } from 'src/app/dtos';

@Component({
    selector: 'app-shopping-list-in-progress',
    templateUrl: './shopping-list-in-progress.component.html',
    styleUrls: ['./shopping-list-in-progress.component.scss']
})
export class ShoppingListInProgressComponent implements OnInit {
    shoppingListItems: PantryItem[] = [];

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit(): void {
        this.shoppingListService.shoppingListItemsChanged.subscribe((newItems)=>{
            this.shoppingListItems = newItems;
        })
    }

}
