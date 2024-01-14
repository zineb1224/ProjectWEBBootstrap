import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCertiComponent } from './item-certi.component';

describe('ItemCertiComponent', () => {
  let component: ItemCertiComponent;
  let fixture: ComponentFixture<ItemCertiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCertiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCertiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
