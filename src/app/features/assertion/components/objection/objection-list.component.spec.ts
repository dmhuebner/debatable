import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectionListComponent } from './objection-list.component';

describe('ObjectionComponent', () => {
  let component: ObjectionListComponent;
  let fixture: ComponentFixture<ObjectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
