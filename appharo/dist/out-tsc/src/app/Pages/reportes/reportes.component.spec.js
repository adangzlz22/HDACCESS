import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReportesComponent } from './reportes.component';
describe('ReportesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReportesComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ReportesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reportes.component.spec.js.map