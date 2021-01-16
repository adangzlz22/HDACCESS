import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PageClienteUnSoloUsoRegistroPage } from './page-cliente-un-solo-uso-registro.page';
describe('PageClienteUnSoloUsoRegistroPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageClienteUnSoloUsoRegistroPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PageClienteUnSoloUsoRegistroPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=page-cliente-un-solo-uso-registro.page.spec.js.map