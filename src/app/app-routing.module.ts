import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssertionContainerComponent } from './features/assertion/containers/assertion-container/assertion-container.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/assertion',
    pathMatch: 'full'
  },
  {
    path: 'assertion',
    component: AssertionContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
