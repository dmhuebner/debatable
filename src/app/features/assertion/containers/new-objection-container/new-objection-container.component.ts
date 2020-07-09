import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Objection } from '../../interfaces/objection.interface';

@Component({
  selector: 'app-new-objection-container',
  templateUrl: './new-objection-container.component.html',
  styleUrls: ['./new-objection-container.component.scss']
})
export class NewObjectionContainerComponent implements OnInit {

  evidenceText: string;

  constructor(public dialogRef: MatDialogRef<NewObjectionContainerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {evidenceText: string}) { }

  ngOnInit(): void {
    this.evidenceText = this.data.evidenceText;
  }

  addObjectionToEvidence(newObjection: Objection): void {
    this.dialogRef.close(newObjection);
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
