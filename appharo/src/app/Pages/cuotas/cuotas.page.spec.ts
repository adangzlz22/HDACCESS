import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CuotasPage } from './cuotas.page';

describe('CuotasPage', () => {
  let component: CuotasPage;
  let fixture: ComponentFixture<CuotasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuotasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CuotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
