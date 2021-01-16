import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BuscadorResidenteComponent } from './buscador-residente.component';
describe('BuscadorResidenteComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BuscadorResidenteComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(BuscadorResidenteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=buscador-residente.component.spec.js.map