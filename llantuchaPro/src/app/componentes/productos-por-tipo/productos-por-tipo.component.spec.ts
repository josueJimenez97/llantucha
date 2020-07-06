import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPorTipoComponent } from './productos-por-tipo.component';

describe('ProductosPorTipoComponent', () => {
  let component: ProductosPorTipoComponent;
  let fixture: ComponentFixture<ProductosPorTipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosPorTipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosPorTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
