import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraFinaComponent } from './obra-fina.component';

describe('ObraFinaComponent', () => {
  let component: ObraFinaComponent;
  let fixture: ComponentFixture<ObraFinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObraFinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObraFinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
