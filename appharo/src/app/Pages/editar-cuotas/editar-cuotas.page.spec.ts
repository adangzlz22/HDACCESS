import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarCuotasPage } from './editar-cuotas.page';

describe('EditarCuotasPage', () => {
  let component: EditarCuotasPage;
  let fixture: ComponentFixture<EditarCuotasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCuotasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarCuotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
