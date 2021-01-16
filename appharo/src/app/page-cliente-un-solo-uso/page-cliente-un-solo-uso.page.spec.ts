import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageClienteUnSoloUsoPage } from './page-cliente-un-solo-uso.page';

describe('PageClienteUnSoloUsoPage', () => {
  let component: PageClienteUnSoloUsoPage;
  let fixture: ComponentFixture<PageClienteUnSoloUsoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageClienteUnSoloUsoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageClienteUnSoloUsoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
