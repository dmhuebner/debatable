import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Objection } from '../../interfaces/objection.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-objection-form',
  templateUrl: './objection-form.component.html',
  styleUrls: ['./objection-form.component.scss']
})
export class ObjectionFormComponent implements OnInit {

  @Input() objection: Objection;

  @Output() newObjectionAdded = new EventEmitter<Objection>();
  @Output() cancelled = new EventEmitter<true>();

  objectionForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.objectionForm = this.initializeForm(this.objection);
  }

  onCancel() {
    this.cancelled.emit(true);
  }

  onObjectionAdded() {
    if (this.objectionForm.valid) {
      this.newObjectionAdded.emit(this.objectionForm.value);
    }
  }

  private initializeForm(objection: Objection): FormGroup {
    return this.fb.group({
      reason: [objection ? objection.reason : '', [Validators.required]],
      evidenceSet: [[], []]
    });
  }

}



// text: string;
// conclusion: string;
// sources: Source[];

// sustained: boolean;
// reason: string;
// evidenceSet: Evidence[];
