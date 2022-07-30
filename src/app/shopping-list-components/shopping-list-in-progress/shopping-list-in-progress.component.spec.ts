import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListInProgressComponent } from './shopping-list-in-progress.component';

describe('ShoppingListInProgressComponent', () => {
  let component: ShoppingListInProgressComponent;
  let fixture: ComponentFixture<ShoppingListInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListInProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
