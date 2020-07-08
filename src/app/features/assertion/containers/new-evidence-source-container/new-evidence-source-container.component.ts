import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Source } from '../../interfaces/source.interface';

@Component({
  selector: 'app-new-evidence-source',
  templateUrl: './new-evidence-source-container.component.html',
  styleUrls: ['./new-evidence-source-container.component.scss']
})
export class NewEvidenceSourceContainerComponent implements OnInit {

  evidenceText: string;

  constructor(public dialogRef: MatDialogRef<NewEvidenceSourceContainerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {evidenceText: string}) { }

  ngOnInit(): void {
    this.evidenceText = this.data.evidenceText;
  }

  addSource(newSource: Source): void {
    this.dialogRef.close(newSource);
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
