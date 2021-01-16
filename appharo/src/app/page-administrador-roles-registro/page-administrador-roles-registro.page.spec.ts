import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageAdministradorRolesRegistroPage } from './page-administrador-roles-registro.page';

describe('PageAdministradorRolesRegistroPage', () => {
  let component: PageAdministradorRolesRegistroPage;
  let fixture: ComponentFixture<PageAdministradorRolesRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdministradorRolesRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageAdministradorRolesRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
