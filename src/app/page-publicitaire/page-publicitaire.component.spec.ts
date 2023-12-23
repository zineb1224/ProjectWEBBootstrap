import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePublicitaireComponent } from './page-publicitaire.component';

describe('PagePublicitaireComponent', () => {
  let component: PagePublicitaireComponent;
  let fixture: ComponentFixture<PagePublicitaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePublicitaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePublicitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
