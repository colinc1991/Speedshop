import { EventEmitter, Injectable } from '@angular/core';
import { PantryItem, Recipe } from '../dtos';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    private pantryItems: PantryItem[] = [
        {
            name: 'Apple',
            added: false
        }, {
            name: 'Tomato',
            added: false
        }, {
            name: 'Pineapple',
            added: false
        },
        { 
            name: 'Chicken',
            added: false 
        }
    ]

    private recipeItems: Recipe[] = [
        {
            name: 'Burritos',
            ingredients: [{ name: 'Refried beans', added: false }, { name: 'Chicken', added: false }],
            added: false
        },
        {
            name: 'Spicy chicken pasta',
            ingredients: [{ name: 'Chicken', added: false }],
            added: false
        },
        {
            name: 'Chicken caesar salad',
            ingredients: [{ name: 'Croutons', added: false }],
            added: false
        }
    ]

    pantryListItemsChanged = new EventEmitter<PantryItem[]>();
    recipeListItemsChanged = new EventEmitter<Recipe[]>();


    constructor() { }

    getPantryItems(): PantryItem[] {
        return this.pantryItems;
    }

    getRecipes(): Recipe[] {
        return this.recipeItems;
    }

    filterItems(searchValue: string, mode: string): PantryItem[] | Recipe[] {
        if (mode == "Pantry") {
            const results = this.pantryItems.filter(pantryItem => {
                return pantryItem.name.toLowerCase().includes(searchValue.toLowerCase());
            });

            this.pantryListItemsChanged.emit(results);
            return results;
        }
        else {
            const results = this.recipeItems.filter(recipeItem => {
                return recipeItem.name.toLowerCase().includes(searchValue.toLowerCase());
            });

            this.recipeListItemsChanged.emit(results);
            return results;
        }
    }
}
