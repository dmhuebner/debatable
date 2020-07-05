import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Evidence } from '../../interfaces/evidence.interface';

@Component({
  selector: 'app-new-evidence',
  templateUrl: './new-evidence-container.component.html',
  styleUrls: ['./new-evidence-container.component.scss']
})
export class NewEvidenceContainerComponent implements OnInit {

  assertionText: string;

  constructor(public dialogRef: MatDialogRef<NewEvidenceContainerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {assertionText: string}) { }

  ngOnInit(): void {
    this.assertionText = this.data.assertionText;
  }

  addEvidence(newEvidence: Evidence): void {
    this.dialogRef.close(newEvidence);
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
