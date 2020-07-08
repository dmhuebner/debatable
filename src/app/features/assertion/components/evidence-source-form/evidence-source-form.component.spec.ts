import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenceSourceFormComponent } from './evidence-source-form.component';

describe('EvidenceSourceFormComponent', () => {
  let component: EvidenceSourceFormComponent;
  let fixture: ComponentFixture<EvidenceSourceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvidenceSourceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenceSourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
