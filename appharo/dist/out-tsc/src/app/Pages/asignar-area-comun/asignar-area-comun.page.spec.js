import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AsignarAreaComunPage } from './asignar-area-comun.page';
describe('AsignarAreaComunPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AsignarAreaComunPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(AsignarAreaComunPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=asignar-area-comun.page.spec.js.map