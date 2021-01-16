import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PageClientePerfilPage } from './page-cliente-perfil.page';
describe('PageClientePerfilPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageClientePerfilPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PageClientePerfilPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=page-cliente-perfil.page.spec.js.map