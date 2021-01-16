import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageAdministradorResidenciasRegistroPage } from './page-administrador-residencias-registro.page';

describe('PageAdministradorResidenciasRegistroPage', () => {
  let component: PageAdministradorResidenciasRegistroPage;
  let fixture: ComponentFixture<PageAdministradorResidenciasRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdministradorResidenciasRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageAdministradorResidenciasRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
