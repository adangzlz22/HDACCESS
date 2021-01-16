import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PageClienteFrecuentesRegistroPage } from './page-cliente-frecuentes-registro.page';
describe('PageClienteFrecuentesRegistroPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageClienteFrecuentesRegistroPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PageClienteFrecuentesRegistroPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=page-cliente-frecuentes-registro.page.spec.js.map