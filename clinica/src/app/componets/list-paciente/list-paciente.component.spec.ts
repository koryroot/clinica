import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListPacienteComponent } from './list-paciente.component';

describe('ListPacienteComponent', () => {
  let component: ListPacienteComponent;
  let fixture: ComponentFixture<ListPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPacienteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
