import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewObjectionContainerComponent } from './new-objection-container.component';

describe('NewObjectionContainerComponent', () => {
  let component: NewObjectionContainerComponent;
  let fixture: ComponentFixture<NewObjectionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewObjectionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewObjectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
