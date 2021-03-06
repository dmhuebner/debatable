import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssertionContainerComponent } from './containers/assertion-container/assertion-container.component';
import { AssertionComponent } from './components/assertion/assertion.component';
import { EvidenceListComponent } from './components/evidence-list/evidence-list.component';
import { SourceListComponent } from './components/source-list/source-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ObjectionListComponent } from './components/objection/objection-list.component';



@NgModule({
  declarations: [
    AssertionContainerComponent,
    AssertionComponent,
    EvidenceListComponent,
    SourceListComponent,
    ObjectionListComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ]
})
export class AssertionModule { }
