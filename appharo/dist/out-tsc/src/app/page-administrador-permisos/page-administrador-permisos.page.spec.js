import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PageAdministradorPermisosPage } from './page-administrador-permisos.page';
describe('PageAdministradorPermisosPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageAdministradorPermisosPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PageAdministradorPermisosPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=page-administrador-permisos.page.spec.js.map