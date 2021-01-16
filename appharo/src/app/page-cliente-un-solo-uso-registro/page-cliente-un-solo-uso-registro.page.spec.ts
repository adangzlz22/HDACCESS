import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageClienteUnSoloUsoRegistroPage } from './page-cliente-un-solo-uso-registro.page';

describe('PageClienteUnSoloUsoRegistroPage', () => {
  let component: PageClienteUnSoloUsoRegistroPage;
  let fixture: ComponentFixture<PageClienteUnSoloUsoRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageClienteUnSoloUsoRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageClienteUnSoloUsoRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
