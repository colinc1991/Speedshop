import { Component, Input, OnInit } from '@angular/core';
import { PantryItem, Recipe } from 'src/app/dtos';
import { SearchService } from 'src/app/services/search.service';


@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
    pantryItems: PantryItem[] = [];
    recipes: Recipe[] = [];
    @Input() mode: string = '';
    
    constructor(private searchService: SearchService) { }
    
    ngOnInit(): void {
        // if no items, get them from the search service
        if (this.pantryItems.length == 0){
            this.pantryItems = this.searchService.getPantryItems();
        }

        if (this.recipes.length == 0){
            this.recipes = this.searchService.getRecipes();
        }

        if (this.mode == 'Pantry'){
            this.searchService.pantryListItemsChanged.subscribe((newItems)=>{
                this.pantryItems = newItems;
            })
        }
        else{
            this.searchService.recipeListItemsChanged.subscribe((newItems)=>{
                this.recipes = newItems;
            })
        }
        
    }

}
