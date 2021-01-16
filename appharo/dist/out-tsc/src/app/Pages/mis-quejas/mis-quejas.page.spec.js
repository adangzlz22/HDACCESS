import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MisQuejasPage } from './mis-quejas.page';
describe('MisQuejasPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MisQuejasPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(MisQuejasPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mis-quejas.page.spec.js.map