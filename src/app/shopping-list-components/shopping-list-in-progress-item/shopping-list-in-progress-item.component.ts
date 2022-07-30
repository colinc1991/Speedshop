import { Component, Input, OnInit } from '@angular/core';
import { faCircleMinus, faGrinTongueSquint } from '@fortawesome/free-solid-svg-icons';
import { PantryItem } from 'src/app/dtos';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
    selector: 'app-shopping-list-in-progress-item',
    templateUrl: './shopping-list-in-progress-item.component.html',
    styleUrls: ['./shopping-list-in-progress-item.component.scss']
})
export class ShoppingListInProgressItemComponent implements OnInit {
    @Input() shoppingListItem: PantryItem = new PantryItem;
    faCircleMinus = faCircleMinus;

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit(): void {
    }

    removeFromShoppingList(): void{
        this.shoppingListService.removeItemFromShoppingList(this.shoppingListItem);
    }
}