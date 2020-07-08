import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assertion } from '../../interfaces/assertion.interface';
import { EvidenceReference } from '../../interfaces/evidence-reference.interface';

@Component({
  selector: 'app-assertion',
  templateUrl: './assertion.component.html',
  styleUrls: ['./assertion.component.scss']
})
export class AssertionComponent implements OnInit {

  @Input() assertion: Assertion;

  @Output() addEvidenceClicked = new EventEmitter<true>();
  @Output() addSourceClicked = new EventEmitter<EvidenceReference>();

  constructor() { }

  ngOnInit(): void {
  }

  addEvidence() {
    this.addEvidenceClicked.emit(true);
  }

  addSource(evidenceReference: EvidenceReference) {
    this.addSourceClicked.emit(evidenceReference);
  }

}
