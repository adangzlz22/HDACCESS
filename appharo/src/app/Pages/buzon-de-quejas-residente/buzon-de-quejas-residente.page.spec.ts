import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuzonDeQuejasResidentePage } from './buzon-de-quejas-residente.page';

describe('BuzonDeQuejasResidentePage', () => {
  let component: BuzonDeQuejasResidentePage;
  let fixture: ComponentFixture<BuzonDeQuejasResidentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuzonDeQuejasResidentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuzonDeQuejasResidentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
