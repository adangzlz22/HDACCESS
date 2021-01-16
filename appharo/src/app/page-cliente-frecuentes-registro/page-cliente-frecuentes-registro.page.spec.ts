import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageClienteFrecuentesRegistroPage } from './page-cliente-frecuentes-registro.page';

describe('PageClienteFrecuentesRegistroPage', () => {
  let component: PageClienteFrecuentesRegistroPage;
  let fixture: ComponentFixture<PageClienteFrecuentesRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageClienteFrecuentesRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageClienteFrecuentesRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
