import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSearchPage } from './item-search.page';

describe('ItemSearchPage', () => {
  let component: ItemSearchPage;
  let fixture: ComponentFixture<ItemSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
