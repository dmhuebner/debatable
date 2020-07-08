import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Source } from '../../interfaces/source.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-evidence-source-form',
  templateUrl: './evidence-source-form.component.html',
  styleUrls: ['./evidence-source-form.component.scss']
})
export class EvidenceSourceFormComponent implements OnInit {

  @Input() evidenceSource: Source;

  @Output() newSourceAdded = new EventEmitter<Source>();
  @Output() cancelled = new EventEmitter<true>();

  sourceForm: FormGroup;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.sourceForm = this.initializeForm(this.evidenceSource);
  }

  onSourceAdded() {
    if (this.sourceForm.valid) {
      this.newSourceAdded.emit(this.sourceForm.value);
    }
  }

  onCancel() {
    this.cancelled.emit(true);
  }

  addCitation(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      const citationsControl = this.sourceForm.get('citations');
      const existingCitations = citationsControl.value;
      existingCitations.push(value.trim());
      citationsControl.setValue(existingCitations);
    }

    if (input) {
      input.value = '';
    }
  }

  removeCitation(citation: string): void {
    const citationsControl = this.sourceForm.get('citations');
    const index = citationsControl.value.findIndex(c => c === citation);

    if (index > -1) {
      const newCitationsValue = citationsControl.value;
      newCitationsValue.splice(index, 1);
      citationsControl.setValue(newCitationsValue);
    }
  }

  private initializeForm(source: Source): FormGroup {
    return this.fb.group({
      title: [source ? source.title : '', [Validators.required]],
      mediaType: [source ? source.mediaType : '', [Validators.required]],
      publishedDate: [source ? source.publishedDate : '', [Validators.required]],
      citations: [source ? source.citations : null, [Validators.required]],
      author: [source ? source.author : '', []],
      link: [source ? source.link : '', [Validators.required]],
    });
  }

}
