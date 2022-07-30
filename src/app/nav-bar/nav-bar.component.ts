import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    goToShoppingListCreate(){
        this.router.navigate(['/shopping-list/create']);
    }

    goToShoppingListView(){
        this.router.navigate(['/shopping-list/view']);
    }

}
