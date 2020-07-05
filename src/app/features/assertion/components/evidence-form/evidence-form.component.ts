import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Source } from '../../interfaces/source.interface';
import { Objection } from '../../interfaces/objection.interface';
import { Evidence } from '../../interfaces/evidence.interface';

@Component({
  selector: 'app-evidence-form',
  templateUrl: './evidence-form.component.html',
  styleUrls: ['./evidence-form.component.scss']
})
export class EvidenceFormComponent implements OnInit {

  @Input() evidence: Evidence;

  @Output() evidenceAdded = new EventEmitter<Evidence>();
  @Output() cancelled = new EventEmitter<true>();

  evidenceForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.evidenceForm = this.initForm(this.evidence);
  }

  initForm(evidence: Evidence): FormGroup {
    return this.fb.group({
      text: [evidence ? evidence.text : '', [Validators.required]],
      conclusion: [evidence ? evidence.conclusion : '', [Validators.required]],
    });
  }

  onEvidenceAdded() {
    if (this.evidenceForm.valid) {
      this.evidenceAdded.emit(this.evidenceForm.value);
    }
  }

  onCancel() {
    this.cancelled.emit(true);
  }

}


// text: string;
// conclusion: string;
// sources: Source[];
// objections?: Objection[];
