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
        if (this.mode == 'Pantry'){
            if (this.pantryItems.length == 0){
                this.pantryItems = this.searchService.getPantryItems();
            }

            this.searchService.pantryListItemsChanged.subscribe((newItems)=>{
                this.pantryItems = newItems;
            })
        }
        else{
            if (this.recipes.length == 0){
                this.recipes = this.searchService.getRecipes();
            }
            
            this.searchService.recipeListItemsChanged.subscribe((newItems)=>{
                this.recipes = newItems;
            })
        }
        
    }

}
