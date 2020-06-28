import { Component, Input, OnInit } from '@angular/core';
import { Source } from '../../interfaces/source.interface';

@Component({
  selector: 'app-source-list',
  templateUrl: './source-list.component.html',
  styleUrls: ['./source-list.component.scss']
})
export class SourceListComponent implements OnInit {

  @Input() sourceList: Source[];

  constructor() { }

  ngOnInit(): void {
  }

}
