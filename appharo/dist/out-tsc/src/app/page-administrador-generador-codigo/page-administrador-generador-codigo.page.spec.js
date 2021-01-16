import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PageAdministradorGeneradorCodigoPage } from './page-administrador-generador-codigo.page';
describe('PageAdministradorGeneradorCodigoPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageAdministradorGeneradorCodigoPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PageAdministradorGeneradorCodigoPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=page-administrador-generador-codigo.page.spec.js.map