import { Component, OnInit } from '@angular/core';
import { PantryItem } from 'src/app/dtos';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

    shoppingListItems: PantryItem[] = [];
    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit(): void {
        this.shoppingListService.shoppingListItemsChanged.subscribe((newItems)=>{
            this.shoppingListItems = newItems;
        })
    }

}