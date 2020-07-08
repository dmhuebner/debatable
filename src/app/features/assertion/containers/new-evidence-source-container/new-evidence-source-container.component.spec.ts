import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEvidenceSourceContainerComponent } from './new-evidence-source-container.component';

describe('NewEvidenceSourceComponent', () => {
  let component: NewEvidenceSourceContainerComponent;
  let fixture: ComponentFixture<NewEvidenceSourceContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEvidenceSourceContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEvidenceSourceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
