import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarPacientesPage } from './registrar-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarPacientesPageRoutingModule {}
