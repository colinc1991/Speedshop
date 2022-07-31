export class Store{
    name: string;
    aisles: Aisle[];
}

export class Aisle{
    number: number;
    categories: Category[];
}

export class Category{
    name: string;
    products: PantryItem[];
}

export class Recipe{
    name: string;
    added: boolean;
    ingredients: PantryItem[];
}

export class PantryItem{
    name: string;
    added: boolean;
}