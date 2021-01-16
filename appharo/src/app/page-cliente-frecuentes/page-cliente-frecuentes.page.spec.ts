import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageClienteFrecuentesPage } from './page-cliente-frecuentes.page';

describe('PageClienteFrecuentesPage', () => {
  let component: PageClienteFrecuentesPage;
  let fixture: ComponentFixture<PageClienteFrecuentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageClienteFrecuentesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageClienteFrecuentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
