import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageAdministradorUsuariosRegistroPage } from './page-administrador-usuarios-registro.page';

describe('PageAdministradorUsuariosRegistroPage', () => {
  let component: PageAdministradorUsuariosRegistroPage;
  let fixture: ComponentFixture<PageAdministradorUsuariosRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdministradorUsuariosRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageAdministradorUsuariosRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
