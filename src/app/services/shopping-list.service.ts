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
        if (!this.shoppingListItems.map(i => i.name).includes(pantryItem.name)) {
            pantryItem.added = true;
            this.shoppingListItems.push(pantryItem);

            this.shoppingListItemsChanged.emit(this.shoppingListItems);
        }
    }

    addRecipeToShoppingList(recipe: Recipe) {
        recipe.added = true;
        recipe.ingredients.forEach(ingredient => {
            if (!this.shoppingListItems.map(i => i.name).includes(ingredient.name)) {
                ingredient.added = true;
                this.shoppingListItems.push(ingredient);
            }
        });
        this.shoppingListItemsChanged.emit(this.shoppingListItems);
    }

    removeItemFromShoppingList(item: PantryItem) {
        if (this.shoppingListItems.includes(item)) {
            item.added = false;
            this.shoppingListItems = this.shoppingListItems.filter(shoppingListItem => shoppingListItem.name != item.name);

            this.shoppingListItemsChanged.emit(this.shoppingListItems);
        }
    }

    removeRecipeFromShoppingList(recipe: Recipe) {
        recipe.added = false;
        recipe.ingredients.forEach(ingredient => {
            if (this.shoppingListItems.map(i => i.name).includes(ingredient.name)) {
                ingredient.added = false;
                this.shoppingListItems = this.shoppingListItems.filter(shoppingListItem => shoppingListItem.name != ingredient.name);
            }
        });
        this.shoppingListItemsChanged.emit(this.shoppingListItems);
    }
}
