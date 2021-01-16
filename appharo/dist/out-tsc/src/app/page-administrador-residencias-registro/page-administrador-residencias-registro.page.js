import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenciasProvider } from '../providers/Residencias/residenciasProvider';
import { NavController } from '@ionic/angular';
let PageAdministradorResidenciasRegistroPage = class PageAdministradorResidenciasRegistroPage {
    constructor(route, ResiProvi, navCtrl) {
        this.route = route;
        this.ResiProvi = ResiProvi;
        this.navCtrl = navCtrl;
        this.lstDiasResidencias = [
            {
                Dia: 'Lunes',
                checked: false,
            },
            {
                Dia: 'Martes',
                checked: false,
            },
            {
                Dia: 'Miercoles',
                checked: false,
            },
            {
                Dia: 'Jueves',
                checked: false,
            },
            {
                Dia: 'Viernes',
                checked: false,
            },
            {
                Dia: 'Sabado',
                checked: false,
            },
            {
                Dia: 'Domingo',
                checked: false,
            },
        ];
        this.WhatsappCorreo = false;
    }
    ngOnInit() {
        console.log(this.lstDiasResidencias);
    }
    ionViewWillEnter() {
        this.WhatsappCorreo = false;
        this.PKResidencia = this.route.snapshot.paramMap.get('PKResidencia');
        console.log(this.PKResidencia);
        this.NombreResidencia = this.route.snapshot.paramMap.get('NombreResidencia');
        this.LimVisitasFrecuentes = this.route.snapshot.paramMap.get('LimVisitasFrecuentes');
        this.LimVisitasUnSoloUso = this.route.snapshot.paramMap.get('LimVisitasUnSoloUso');
        if (this.NombreResidencia != '0') {
            this.ModificTexto = 'Modificar';
            this.Desaparecer = true;
        }
        else {
            this.ModificTexto = 'Agregar';
            this.Desaparecer = false;
            this.NombreResidencia = '';
            this.LimVisitasFrecuentes = '';
            this.LimVisitasUnSoloUso = '';
        }
    }
    Guardar() {
        console.log(this.WhatsappCorreo);
        if (this.Desaparecer == false) {
            this.ResiProvi.CrearResidencias(this.NombreResidencia, this.LimVisitasFrecuentes, this.LimVisitasUnSoloUso, this.WhatsappCorreo).then(result => {
                console.log(result);
                this.navCtrl.pop();
            }).catch(error => {
                console.log(error);
            });
        }
        else {
            this.ResiProvi.ActualizarResidencias(this.PKResidencia, this.NombreResidencia, this.LimVisitasFrecuentes, this.LimVisitasUnSoloUso, this.WhatsappCorreo).then(result => {
                console.log(result);
                this.navCtrl.pop();
            }).catch(error => {
                console.log(error);
            });
        }
    }
    Eliminar() {
        this.ResiProvi.EliminarResidencias(this.PKResidencia).then(result => {
            console.log(result);
            this.navCtrl.pop();
        }).catch(error => {
            console.log(error);
        });
    }
    Funcion(event) {
        console.log(event);
        console.log("HOLA");
        console.log(this.lstDiasResidencias);
    }
};
PageAdministradorResidenciasRegistroPage = tslib_1.__decorate([
    Component({
        selector: 'app-page-administrador-residencias-registro',
        templateUrl: './page-administrador-residencias-registro.page.html',
        styleUrls: ['./page-administrador-residencias-registro.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        ResidenciasProvider,
        NavController])
], PageAdministradorResidenciasRegistroPage);
export { PageAdministradorResidenciasRegistroPage };
//# sourceMappingURL=page-administrador-residencias-registro.page.js.map