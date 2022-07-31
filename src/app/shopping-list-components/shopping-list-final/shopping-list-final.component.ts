import { Component, OnInit } from '@angular/core';
import { Aisle, Category } from 'src/app/dtos';

@Component({
    selector: 'app-shopping-list-final',
    templateUrl: './shopping-list-final.component.html',
    styleUrls: ['./shopping-list-final.component.scss']
})
export class ShoppingListFinalComponent implements OnInit {
    aisles: Aisle[];
    categories: Category[];

    constructor() { }

    ngOnInit(): void {

        let meatCategory = new Category;
        meatCategory.name = "Meat";
        meatCategory.products = [{ name: "Chicken", added: false }, { name: "Bacon", added: false }]

        let aisle1 = new Aisle;
        aisle1.number = 1;
        aisle1.categories = [];
        aisle1.categories.push(meatCategory);

        let vegCategory = new Category;
        vegCategory.name = "Vegetables";
        vegCategory.products = [{ name: "Oranges", added: false }, { name: "Peppers", added: false }]

        let aisle2 = new Aisle;
        aisle2.number = 2;
        aisle2.categories = [];
        aisle2.categories.push(vegCategory);

        this.aisles = [];
        this.aisles.push(aisle1);
        this.aisles.push(aisle2);
    }

}
