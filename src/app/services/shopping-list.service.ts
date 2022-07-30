import { EventEmitter, Injectable } from '@angular/core';
import { PantryItem, Recipe } from '../dtos';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {

    shoppingListItems: PantryItem[] = [];
    shoppingListItemsChanged = new EventEmitter<PantryItem[]>();
    
    constructor() { }

    ngOnInit(): void {
    }

    addItemToShoppingList(pantryItem: PantryItem) {
        if (!this.shoppingListItems.includes(pantryItem)) {
            this.shoppingListItems.push(pantryItem);

            this.shoppingListItemsChanged.emit(this.shoppingListItems);
        }
    }

    addRecipeToShoppingList(recipe: Recipe) {
        recipe.ingredients.forEach(ingredient => {
            if (!this.shoppingListItems.includes(ingredient)) {
                this.shoppingListItems.push(ingredient);

                this.shoppingListItemsChanged.emit(this.shoppingListItems);
            }
        });
    }

    removeItemFromShoppingList(item: PantryItem) {
        item.added = false;
        if (this.shoppingListItems.includes(item)) {
            this.shoppingListItems = this.shoppingListItems.filter(shoppingListItem => shoppingListItem != item);

            this.shoppingListItemsChanged.emit(this.shoppingListItems);
        }
    }
}
