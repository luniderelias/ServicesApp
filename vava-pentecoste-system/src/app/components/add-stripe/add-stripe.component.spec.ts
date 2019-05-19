import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStripeComponent } from './add-stripe.component';

describe('AddStripeComponent', () => {
  let component: AddStripeComponent;
  let fixture: ComponentFixture<AddStripeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStripeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
