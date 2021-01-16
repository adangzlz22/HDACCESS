import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageAcercaDePage } from './page-acerca-de.page';

describe('PageAcercaDePage', () => {
  let component: PageAcercaDePage;
  let fixture: ComponentFixture<PageAcercaDePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAcercaDePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageAcercaDePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
