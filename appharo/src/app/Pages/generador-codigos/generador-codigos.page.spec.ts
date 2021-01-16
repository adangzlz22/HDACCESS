import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneradorCodigosPage } from './generador-codigos.page';

describe('GeneradorCodigosPage', () => {
  let component: GeneradorCodigosPage;
  let fixture: ComponentFixture<GeneradorCodigosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneradorCodigosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneradorCodigosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
