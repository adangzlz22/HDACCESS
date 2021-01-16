import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BuzonDeQuejasResidentePage } from './buzon-de-quejas-residente.page';
describe('BuzonDeQuejasResidentePage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BuzonDeQuejasResidentePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(BuzonDeQuejasResidentePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=buzon-de-quejas-residente.page.spec.js.map