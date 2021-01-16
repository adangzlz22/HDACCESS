import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuzonDeQuejasPage } from './buzon-de-quejas.page';

describe('BuzonDeQuejasPage', () => {
  let component: BuzonDeQuejasPage;
  let fixture: ComponentFixture<BuzonDeQuejasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuzonDeQuejasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuzonDeQuejasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
