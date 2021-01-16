import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallesBuzonDeQuejasPage } from './detalles-buzon-de-quejas.page';

describe('DetallesBuzonDeQuejasPage', () => {
  let component: DetallesBuzonDeQuejasPage;
  let fixture: ComponentFixture<DetallesBuzonDeQuejasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesBuzonDeQuejasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesBuzonDeQuejasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
