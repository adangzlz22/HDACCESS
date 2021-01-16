import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageAdministradorPermisosPage } from './page-administrador-permisos.page';

describe('PageAdministradorPermisosPage', () => {
  let component: PageAdministradorPermisosPage;
  let fixture: ComponentFixture<PageAdministradorPermisosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdministradorPermisosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageAdministradorPermisosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
