import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageAdministradorPermisosRegistroPage } from './page-administrador-permisos-registro.page';

describe('PageAdministradorPermisosRegistroPage', () => {
  let component: PageAdministradorPermisosRegistroPage;
  let fixture: ComponentFixture<PageAdministradorPermisosRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdministradorPermisosRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageAdministradorPermisosRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
