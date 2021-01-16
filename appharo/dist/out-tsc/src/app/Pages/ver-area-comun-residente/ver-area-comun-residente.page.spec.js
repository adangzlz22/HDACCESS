import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { VerAreaComunResidentePage } from './ver-area-comun-residente.page';
describe('VerAreaComunResidentePage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VerAreaComunResidentePage],
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
//# sourceMappingURL=ver-area-comun-residente.page.spec.js.map