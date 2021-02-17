import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PopovercomponentPageModule } from './popovercomponent/popovercomponent.module';

import { UsuarioProvider } from './providers/usuarios/usuariosProviders';
import { HttpClientModule } from '@angular/common/http';
import { ConfigProvider } from './Config/config';
import { TipoPeticionControllerProvider } from './providers/TipoPeticion/TipoPeticion';
import { MenuProvider } from './providers/Menu/menuProvider';
import { VisitaProvider } from './providers/Visitas/visitaProvider';
import { ResidenciasProvider } from './providers/Residencias/residenciasProvider';
import { EstadoCuentaComponent } from './Pages/estado-cuenta/estado-cuenta.component';
import { PagosEfectivoComponent } from './Pages/pagos-efectivo/pagos-efectivo.component';
import { ReportesComponent } from './Pages/reportes/reportes.component';
import { BuscadorResidenteComponent } from './Shared/Residentes/buscador-residente/buscador-residente.component';
import { PagosControllerProvider } from './providers/Pagos/pagosProvider';
import { SuscripcionesControllerProvider } from './providers/Suscripciones/suscripcionesProvider';
import { FormsModule } from '@angular/forms';
import { AreaComun } from './providers/AreaComun/AreaComun';
import { BuzonDeQuejas } from './providers/BuzonDeQuejas/BuzonDeQuejas';
import { CommonModule } from '@angular/common';
import { PagoMPComponent } from './Pages/pago-mp/pago-mp.component';
import { GeneradorProvider } from './providers/GeneradorCodigosDeBarra/GeneradorProvider';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { BuscadorTAGSComponent } from './Pages/buscar-tags/buscar-tags.page';

@NgModule({
  declarations: [AppComponent
                ,PagosEfectivoComponent
                ,BuscadorResidenteComponent
                ,EstadoCuentaComponent
                ,ReportesComponent
                ,BuscadorTAGSComponent
                , PagoMPComponent],
  entryComponents: [],
  imports: [BrowserModule
    , IonicModule.forRoot()
    , AppRoutingModule
    , PopovercomponentPageModule
    , HttpClientModule
    , FormsModule
    , CommonModule
    , IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    InAppBrowser,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UsuarioProvider,
    ConfigProvider,
    TipoPeticionControllerProvider,
    MenuProvider,
    VisitaProvider,
    ResidenciasProvider,
    PagosControllerProvider,
    SuscripcionesControllerProvider,
    BuzonDeQuejas,
    AreaComun,
    GeneradorProvider,
    Storage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
