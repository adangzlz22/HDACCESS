import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageAdministradorGeneradorCodigoPage } from './page-administrador-generador-codigo.page';

describe('PageAdministradorGeneradorCodigoPage', () => {
  let component: PageAdministradorGeneradorCodigoPage;
  let fixture: ComponentFixture<PageAdministradorGeneradorCodigoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdministradorGeneradorCodigoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageAdministradorGeneradorCodigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
