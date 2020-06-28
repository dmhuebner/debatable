import { Component, Input, OnInit } from '@angular/core';
import { Assertion } from '../../interfaces/assertion.interface';

@Component({
  selector: 'app-assertion',
  templateUrl: './assertion.component.html',
  styleUrls: ['./assertion.component.scss']
})
export class AssertionComponent implements OnInit {

  @Input() assertion: Assertion;

  constructor() { }

  ngOnInit(): void {
  }

}
