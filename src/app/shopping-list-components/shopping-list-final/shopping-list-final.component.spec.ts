import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListFinalComponent } from './shopping-list-final.component';

describe('ShoppingListFinalComponent', () => {
  let component: ShoppingListFinalComponent;
  let fixture: ComponentFixture<ShoppingListFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListFinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
