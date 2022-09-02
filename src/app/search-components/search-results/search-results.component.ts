import { Component, Input, OnInit } from '@angular/core';
import { PantryItem, Recipe } from 'src/app/dtos';
import { SearchService } from 'src/app/services/search.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';


@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
    pantryItems: PantryItem[] = [];
    recipes: Recipe[] = [];
    @Input() mode: string = '';

    constructor(private searchService: SearchService, private shoppingListService: ShoppingListService) { }

    ngOnInit(): void {
        if (this.mode == 'Pantry') {
            if (this.pantryItems.length == 0) {
                this.pantryItems = this.searchService.getPantryItems();
            }

            this.searchService.pantryListItemsChanged.subscribe((newItems) => {
                this.pantryItems = newItems;
            })

            this.shoppingListService.shoppingListItemsChanged.subscribe(updatedList => {
                this.pantryItems.forEach(pantryItem => {
                    if (!updatedList.map(l => l.name).includes(pantryItem.name)) {
                        pantryItem.added = false;
                    }
                });
            })
        }
        else {
            if (this.recipes.length == 0) {
                this.recipes = this.searchService.getRecipes();
            }

            this.searchService.recipeListItemsChanged.subscribe((newItems) => {
                this.recipes = newItems;
            })

            this.shoppingListService.shoppingListItemsChanged.subscribe(updatedList => {
                this.recipes.forEach(recipe => {
                    let ingredientMissing = false;
                    recipe.ingredients.forEach(ingredient => {
                        if (!updatedList.map(l => l.name).includes(ingredient.name)) {
                            ingredientMissing = true;
                        }
                    });

                    if (ingredientMissing) {
                        recipe.added = false;
                    }
                });
            })
        }
    }

}
