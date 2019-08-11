import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAddPage } from './billing-add.page';

describe('BillingAddPage', () => {
  let component: BillingAddPage;
  let fixture: ComponentFixture<BillingAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
