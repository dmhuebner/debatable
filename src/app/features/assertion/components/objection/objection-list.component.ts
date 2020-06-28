import { Component, Input, OnInit } from '@angular/core';
import { Objection } from '../../interfaces/objection.interface';

@Component({
  selector: 'app-objection-list',
  templateUrl: './objection-list.component.html',
  styleUrls: ['./objection-list.component.scss']
})
export class ObjectionListComponent implements OnInit {

  @Input() objections: Objection[];

  constructor() { }

  ngOnInit(): void {
  }

}
