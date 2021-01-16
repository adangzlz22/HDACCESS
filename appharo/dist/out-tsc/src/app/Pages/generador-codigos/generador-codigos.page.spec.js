import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { GeneradorCodigosPage } from './generador-codigos.page';
describe('GeneradorCodigosPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GeneradorCodigosPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(GeneradorCodigosPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=generador-codigos.page.spec.js.map