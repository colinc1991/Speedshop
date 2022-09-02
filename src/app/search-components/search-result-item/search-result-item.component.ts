import { Component, Input, OnInit } from '@angular/core';
import { faCircleCheck, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { PantryItem, Recipe } from 'src/app/dtos';
import { ShoppingListService } from 'src/app/services/shopping-list.service';


@Component({
    selector: 'app-search-result-item',
    templateUrl: './search-result-item.component.html',
    styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {
    @Input() receivedPantryItem: PantryItem = new PantryItem;
    @Input() receivedRecipe: Recipe = new Recipe;
    @Input() mode: string = '';

    faCirclePlus = faCirclePlus;
    faCircleCheck = faCircleCheck;

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit(): void {

    }

    addToShoppingList(pantryItem: PantryItem): void {
        this.shoppingListService.addItemToShoppingList(pantryItem)
    }

    removeFromShoppingList(pantryItem: PantryItem): void {
        this.shoppingListService.removeItemFromShoppingList(pantryItem);
    }

    addRecipeToShoppingList(recipe: Recipe): void {
        this.shoppingListService.addRecipeToShoppingList(recipe)
    }

    removeRecipeFromShoppingList(recipe: Recipe): void {
        this.shoppingListService.removeRecipeFromShoppingList(recipe);
    }
}
