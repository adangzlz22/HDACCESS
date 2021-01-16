import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallesbuzondequejaadministradorPage } from './detallesbuzondequejaadministrador.page';

describe('DetallesbuzondequejaadministradorPage', () => {
  let component: DetallesbuzondequejaadministradorPage;
  let fixture: ComponentFixture<DetallesbuzondequejaadministradorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesbuzondequejaadministradorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesbuzondequejaadministradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
