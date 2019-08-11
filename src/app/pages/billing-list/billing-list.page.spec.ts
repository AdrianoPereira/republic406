import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingListPage } from './billing-list.page';

describe('BillingListPage', () => {
  let component: BillingListPage;
  let fixture: ComponentFixture<BillingListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
