import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssertionContainerComponent } from './assertion-container.component';

describe('AssertionContainerComponent', () => {
  let component: AssertionContainerComponent;
  let fixture: ComponentFixture<AssertionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssertionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssertionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
