import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';

const routes: Routes = [
  {
    path: '',
    component: AdditionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
