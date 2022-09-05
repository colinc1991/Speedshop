import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { ShoppingListCreateComponent } from './shopping-list-components/shopping-list-create/shopping-list-create.component';
import { ShoppingListFinalComponent } from './shopping-list-components/shopping-list-final/shopping-list-final.component';
import { WidgetTestComponent } from './widget-test/widget-test.component';


const routes: Routes = [
    { path: 'recipe-list', component: RecipeListComponent },
    { path: 'shopping-list/view', component: ShoppingListFinalComponent },
    { path: 'shopping-list/create', component: ShoppingListCreateComponent },
    { path: '**', component: WidgetTestComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
