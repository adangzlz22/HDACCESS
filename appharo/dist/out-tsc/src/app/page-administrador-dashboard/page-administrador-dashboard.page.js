import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';
let PageAdministradorDashboardPage = class PageAdministradorDashboardPage {
    constructor(popover) {
        this.popover = popover;
    }
    ngOnInit() {
    }
    CreatePopOver(evento) {
        this.popover.create({ component: PopovercomponentPage,
            showBackdrop: false,
            event: evento,
            backdropDismiss: false }).then((popoverelement => {
            popoverelement.present();
        }));
    }
};
PageAdministradorDashboardPage = tslib_1.__decorate([
    Component({
        selector: 'app-page-administrador-dashboard',
        templateUrl: './page-administrador-dashboard.page.html',
        styleUrls: ['./page-administrador-dashboard.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [PopoverController])
], PageAdministradorDashboardPage);
export { PageAdministradorDashboardPage };
//# sourceMappingURL=page-administrador-dashboard.page.js.map