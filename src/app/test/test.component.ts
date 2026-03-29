import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrl: './test.component.scss',
    standalone: false
})
export class TestComponent implements OnInit {
    products: any[] = [];
    categories: string[] = [];
    newCategory: string = "";

    constructor(private productService: ProductService) {
        this.productService = productService;
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(data => {
            this.products = data.products;
        })
        this.categories = this.getSavedCategories();
    }

    createCategory() {
        this.categories.push(this.newCategory);
        localStorage.setItem("categories", this.categories.toString());
        this.newCategory = "";
    }

    private getSavedCategories() {
        const localStorageCategories = localStorage.getItem("categories");
        if (!localStorageCategories) {
            return [];
        }

        return localStorageCategories.split(',');
    }
}
