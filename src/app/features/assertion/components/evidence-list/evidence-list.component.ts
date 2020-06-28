import { Component, Input, OnInit } from '@angular/core';
import { Evidence } from '../../interfaces/evidence.interface';

@Component({
  selector: 'app-evidence-list',
  templateUrl: './evidence-list.component.html',
  styleUrls: ['./evidence-list.component.scss']
})
export class EvidenceListComponent implements OnInit {

  @Input() evidenceList: Evidence[];

  constructor() { }

  ngOnInit(): void {
  }

}
