import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraGruesaComponent } from './obra-gruesa.component';

describe('ObraGruesaComponent', () => {
  let component: ObraGruesaComponent;
  let fixture: ComponentFixture<ObraGruesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObraGruesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObraGruesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
