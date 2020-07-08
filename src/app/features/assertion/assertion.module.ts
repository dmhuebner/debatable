import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssertionContainerComponent } from './containers/assertion-container/assertion-container.component';
import { AssertionComponent } from './components/assertion/assertion.component';
import { EvidenceListComponent } from './components/evidence-list/evidence-list.component';
import { SourceListComponent } from './components/source-list/source-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ObjectionListComponent } from './components/objection/objection-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { EvidenceSourceFormComponent } from './components/evidence-source-form/evidence-source-form.component';
import { NewEvidenceSourceContainerComponent } from './containers/new-evidence-source-container/new-evidence-source-container.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';



@NgModule({
  declarations: [
    AssertionContainerComponent,
    AssertionComponent,
    EvidenceListComponent,
    SourceListComponent,
    ObjectionListComponent,
    EvidenceSourceFormComponent,
    NewEvidenceSourceContainerComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule
  ]
})
export class AssertionModule { }
