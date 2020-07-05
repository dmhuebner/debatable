import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEvidenceContainerComponent } from './new-evidence-container.component';

describe('NewEvidenceComponent', () => {
  let component: NewEvidenceContainerComponent;
  let fixture: ComponentFixture<NewEvidenceContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEvidenceContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEvidenceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
