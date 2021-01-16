import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BuzonDeQuejasPage } from './buzon-de-quejas.page';
describe('BuzonDeQuejasPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BuzonDeQuejasPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(BuzonDeQuejasPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=buzon-de-quejas.page.spec.js.map