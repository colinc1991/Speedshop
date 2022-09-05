import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTestComponent } from './widget-test.component';

describe('WidgetTestComponent', () => {
  let component: WidgetTestComponent;
  let fixture: ComponentFixture<WidgetTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
