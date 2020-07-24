import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemesComponent } from './itemes.component';

describe('ItemesComponent', () => {
  let component: ItemesComponent;
  let fixture: ComponentFixture<ItemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
