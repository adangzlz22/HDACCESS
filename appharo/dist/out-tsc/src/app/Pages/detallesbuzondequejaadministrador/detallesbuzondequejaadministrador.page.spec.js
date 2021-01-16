import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DetallesbuzondequejaadministradorPage } from './detallesbuzondequejaadministrador.page';
describe('DetallesbuzondequejaadministradorPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetallesbuzondequejaadministradorPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(DetallesbuzondequejaadministradorPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detallesbuzondequejaadministrador.page.spec.js.map