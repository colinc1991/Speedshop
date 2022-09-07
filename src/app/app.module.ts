import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search-components/search/search.component';
import { SearchResultsComponent } from './search-components/search-results/search-results.component';
import { SearchResultItemComponent } from './search-components/search-result-item/search-result-item.component';
import { ShoppingListFinalComponent } from './shopping-list-components/shopping-list-final/shopping-list-final.component';
import { ShoppingListInProgressComponent } from './shopping-list-components/shopping-list-in-progress/shopping-list-in-progress.component';
import { ShoppingListInProgressItemComponent } from './shopping-list-components/shopping-list-in-progress-item/shopping-list-in-progress-item.component';
import { ShoppingListComponent } from './shopping-list-components/shopping-list/shopping-list.component';
import { ShoppingListCreateComponent } from './shopping-list-components/shopping-list-create/shopping-list-create.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        RecipeListComponent,
        SearchComponent,
        SearchResultsComponent,
        SearchResultItemComponent,
        ShoppingListFinalComponent,
        ShoppingListInProgressComponent,
        ShoppingListInProgressItemComponent,
        ShoppingListComponent,
        ShoppingListCreateComponent,
        CustomSelectComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
