import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListInProgressItemComponent } from './shopping-list-in-progress-item.component';

describe('ShoppingListInProgressItemComponent', () => {
  let component: ShoppingListInProgressItemComponent;
  let fixture: ComponentFixture<ShoppingListInProgressItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListInProgressItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListInProgressItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
