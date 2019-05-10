import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatUserPage } from './chat-user.page';

describe('ChatUserPage', () => {
  let component: ChatUserPage;
  let fixture: ComponentFixture<ChatUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
