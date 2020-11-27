import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarPacientesPageRoutingModule } from './registrar-pacientes-routing.module';

import { RegistrarPacientesPage } from './registrar-pacientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarPacientesPageRoutingModule
  ],
  declarations: [RegistrarPacientesPage]
})
export class RegistrarPacientesPageModule {}
