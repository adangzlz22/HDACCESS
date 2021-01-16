import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { VerAreaComunPage } from './ver-area-comun.page';
describe('VerAreaComunPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VerAreaComunPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(VerAreaComunPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ver-area-comun.page.spec.js.map