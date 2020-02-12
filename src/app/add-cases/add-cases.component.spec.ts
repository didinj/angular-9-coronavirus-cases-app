import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCasesComponent } from './add-cases.component';

describe('AddCasesComponent', () => {
  let component: AddCasesComponent;
  let fixture: ComponentFixture<AddCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
