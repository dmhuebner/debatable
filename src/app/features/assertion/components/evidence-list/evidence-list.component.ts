import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Evidence } from '../../interfaces/evidence.interface';
import { EvidenceReference } from '../../interfaces/evidence-reference.interface';

@Component({
  selector: 'app-evidence-list',
  templateUrl: './evidence-list.component.html',
  styleUrls: ['./evidence-list.component.scss']
})
export class EvidenceListComponent implements OnInit {

  @Input() evidenceList: Evidence[];

  @Output() addSourceClicked = new EventEmitter<EvidenceReference>();
  @Output() addObjectionClicked = new EventEmitter<EvidenceReference>();

  constructor() { }

  ngOnInit(): void {
  }

  addSource(evidenceReference: EvidenceReference) {
    this.addSourceClicked.emit(evidenceReference);
  }

  addObjection(evidenceReference: EvidenceReference) {
    this.addObjectionClicked.emit(evidenceReference);
  }

}
