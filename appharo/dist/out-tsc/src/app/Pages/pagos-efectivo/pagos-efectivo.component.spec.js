import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PagosEfectivoComponent } from './pagos-efectivo.component';
describe('PagosEfectivoComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PagosEfectivoComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PagosEfectivoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pagos-efectivo.component.spec.js.map