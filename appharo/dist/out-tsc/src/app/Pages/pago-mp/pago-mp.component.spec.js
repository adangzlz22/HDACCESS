import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PagoMPComponent } from './pago-mp.component';
describe('PagoMPComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PagoMPComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PagoMPComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pago-mp.component.spec.js.map