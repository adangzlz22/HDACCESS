import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallesAreaComunPage } from './detalles-area-comun.page';

describe('DetallesAreaComunPage', () => {
  let component: DetallesAreaComunPage;
  let fixture: ComponentFixture<DetallesAreaComunPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesAreaComunPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesAreaComunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
