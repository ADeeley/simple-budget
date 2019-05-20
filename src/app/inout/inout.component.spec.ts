import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InoutComponent } from './inout.component';

describe('InoutComponent', () => {
  let component: InoutComponent;
  let fixture: ComponentFixture<InoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
