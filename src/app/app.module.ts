import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssertionModule } from './features/assertion/assertion.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EvidenceFormComponent } from './features/assertion/components/evidence-form/evidence-form.component';
import { NewEvidenceContainerComponent } from './features/assertion/containers/new-evidence-container/new-evidence-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    EvidenceFormComponent,
    NewEvidenceContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AssertionModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
