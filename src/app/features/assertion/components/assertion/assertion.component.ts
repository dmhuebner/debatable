import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assertion } from '../../interfaces/assertion.interface';

@Component({
  selector: 'app-assertion',
  templateUrl: './assertion.component.html',
  styleUrls: ['./assertion.component.scss']
})
export class AssertionComponent implements OnInit {

  @Input() assertion: Assertion;

  @Output() addEvidenceClicked = new EventEmitter<true>();

  constructor() { }

  ngOnInit(): void {
  }

  addEvidence() {
    this.addEvidenceClicked.emit(true);
  }

}
