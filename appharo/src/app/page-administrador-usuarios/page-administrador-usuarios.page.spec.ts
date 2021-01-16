import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageAdministradorUsuariosPage } from './page-administrador-usuarios.page';

describe('PageAdministradorUsuariosPage', () => {
  let component: PageAdministradorUsuariosPage;
  let fixture: ComponentFixture<PageAdministradorUsuariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdministradorUsuariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageAdministradorUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
