import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerAreaComunResidentePage } from './ver-area-comun-residente.page';

describe('VerAreaComunResidentePage', () => {
  let component: VerAreaComunResidentePage;
  let fixture: ComponentFixture<VerAreaComunResidentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerAreaComunResidentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerAreaComunResidentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
