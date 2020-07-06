import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosObraGruesaComponent } from './productos-obra-gruesa.component';

describe('ProductosObraGruesaComponent', () => {
  let component: ProductosObraGruesaComponent;
  let fixture: ComponentFixture<ProductosObraGruesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosObraGruesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosObraGruesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
