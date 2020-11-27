import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrarPacientesPage } from './registrar-pacientes.page';

describe('RegistrarPacientesPage', () => {
  let component: RegistrarPacientesPage;
  let fixture: ComponentFixture<RegistrarPacientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarPacientesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarPacientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
