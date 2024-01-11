import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetificatItemComponent } from './cetificat-item.component';

describe('CetificatItemComponent', () => {
  let component: CetificatItemComponent;
  let fixture: ComponentFixture<CetificatItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CetificatItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CetificatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
