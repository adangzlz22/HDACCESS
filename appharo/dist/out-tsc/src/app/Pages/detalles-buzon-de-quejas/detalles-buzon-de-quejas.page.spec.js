import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DetallesBuzonDeQuejasPage } from './detalles-buzon-de-quejas.page';
describe('DetallesBuzonDeQuejasPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetallesBuzonDeQuejasPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(DetallesBuzonDeQuejasPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detalles-buzon-de-quejas.page.spec.js.map