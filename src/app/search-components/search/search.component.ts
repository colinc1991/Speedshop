import { Component, Input, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from '../../services/search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    faSearch = faSearch;
    searchValue: string = '';
    @Input() mode: string = '';

    constructor(private searchService: SearchService) { }

    ngOnInit(): void {
        
    }

    onSearch(){
        this.searchService.filterItems(this.searchValue, this.mode);
    }

}
