export class PantryItem{
    name: string = '';
    added: boolean = false;
}

export class Recipe{
    name: string = '';
    ingredients: PantryItem[] = [];
}