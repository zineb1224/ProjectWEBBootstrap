import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMemberComponent } from './item-member.component';

describe('ItemMemberComponent', () => {
  let component: ItemMemberComponent;
  let fixture: ComponentFixture<ItemMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
