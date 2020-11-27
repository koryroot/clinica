import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormUserComponent } from './form-user.component';

describe('FormUserComponent', () => {
  let component: FormUserComponent;
  let fixture: ComponentFixture<FormUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUserComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
