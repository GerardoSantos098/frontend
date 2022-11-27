import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentoComponent } from './documento/documento.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
