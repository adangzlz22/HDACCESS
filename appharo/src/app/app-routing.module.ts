import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PagosEfectivoComponent } from './Pages/pagos-efectivo/pagos-efectivo.component';
import { EstadoCuentaComponent } from './Pages/estado-cuenta/estado-cuenta.component';
import { BuscadorResidenteComponent } from './Shared/Residentes/buscador-residente/buscador-residente.component';
import { ReportesComponent } from './Pages/reportes/reportes.component';
import { PagoMPComponent } from './Pages/pago-mp/pago-mp.component';

const routes: Routes = [
  { path: '', redirectTo: 'page-login', pathMatch: 'full' },
  { path: 'page-login', loadChildren: () => import('./Pages/page-login/page-login.module').then( m => m.PageLoginPageModule)},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'page-login',
    loadChildren: () => import('./Pages/page-login/page-login.module').then( m => m.PageLoginPageModule)
  },
  {
    path: 'page-cliente-perfil/:NombreCompleto/:Correo/:Telefono',
    loadChildren: () => import('./page-cliente-perfil/page-cliente-perfil.module').then( m => m.PageClientePerfilPageModule)
  },
  {
    path: 'page-cliente-frecuentes',
    loadChildren: () => import('./page-cliente-frecuentes/page-cliente-frecuentes.module').then( m => m.PageClienteFrecuentesPageModule)
  },
  {
    path: 'page-cliente-frecuentes-registro',
    loadChildren: () => import('./page-cliente-frecuentes-registro/page-cliente-frecuentes-registro.module').then( m => m.PageClienteFrecuentesRegistroPageModule)
  },
  {
    path: 'page-cliente-un-solo-uso/:Pagina',
    loadChildren: () => import('./page-cliente-un-solo-uso/page-cliente-un-solo-uso.module').then( m => m.PageClienteUnSoloUsoPageModule)
  },
  {
    path: 'page-cliente-un-solo-uso-registro/:PKVisita/:TipoVisita',
    loadChildren: () => import('./page-cliente-un-solo-uso-registro/page-cliente-un-solo-uso-registro.module').then( m => m.PageClienteUnSoloUsoRegistroPageModule)
  },
  {
    path: 'page-cliente-dashboard',
    loadChildren: () => import('./page-cliente-dashboard/page-cliente-dashboard.module').then( m => m.PageClienteDashboardPageModule)
  },
  {
    path: 'page-acerca-de',
    loadChildren: () => import('./page-acerca-de/page-acerca-de.module').then( m => m.PageAcercaDePageModule)
  },
  {
    path: 'page-administrador-perfil',
    loadChildren: () => import('./page-administrador-perfil/page-administrador-perfil.module').then( m => m.PageAdministradorPerfilPageModule)
  },
  {
    path: 'page-administrador-residencias',
    loadChildren: () => import('./page-administrador-residencias/page-administrador-residencias.module').then( m => m.PageAdministradorResidenciasPageModule)
  },
  {
    path: 'page-administrador-residencias-registro/:PKResidencia/:NombreResidencia/:LimVisitasFrecuentes/:LimVisitasUnSoloUso/:FKDiasActivados',
    loadChildren: () => import('./page-administrador-residencias-registro/page-administrador-residencias-registro.module').then( m => m.PageAdministradorResidenciasRegistroPageModule)
  },
  {
    path: 'page-administrador-generador-codigo',
    loadChildren: () => import('./page-administrador-generador-codigo/page-administrador-generador-codigo.module').then( m => m.PageAdministradorGeneradorCodigoPageModule)
  },
  {
    path: 'page-administrador-usuarios/:PKUsuario/:Tipo/:FKResidencia',
    loadChildren: () => import('./page-administrador-usuarios/page-administrador-usuarios.module').then( m => m.PageAdministradorUsuariosPageModule)
  },
  {
    path: 'page-administrador-usuarios-registro/:PKUsuario/:NombreCompleto/:Correo/:Telefono/:FKNivel/:FKMenuBandera/:FKResidencia',
    loadChildren: () => import('./page-administrador-usuarios-registro/page-administrador-usuarios-registro.module').then( m => m.PageAdministradorUsuariosRegistroPageModule)
  },
  {
    path: 'page-administrador-permisos',
    loadChildren: () => import('./page-administrador-permisos/page-administrador-permisos.module').then( m => m.PageAdministradorPermisosPageModule)
  },
  {
    path: 'page-administrador-permisos-registro',
    loadChildren: () => import('./page-administrador-permisos-registro/page-administrador-permisos-registro.module').then( m => m.PageAdministradorPermisosRegistroPageModule)
  },
  {
    path: 'page-administrador-roles',
    loadChildren: () => import('./page-administrador-roles/page-administrador-roles.module').then( m => m.PageAdministradorRolesPageModule)
  },
  {
    path: 'page-administrador-roles-registro',
    loadChildren: () => import('./page-administrador-roles-registro/page-administrador-roles-registro.module').then( m => m.PageAdministradorRolesRegistroPageModule)
  },
  {
    path: 'page-administrador-dashboard',
    loadChildren: () => import('./page-administrador-dashboard/page-administrador-dashboard.module').then( m => m.PageAdministradorDashboardPageModule)
  },
  {
    path: 'pagoEfectivo',
    component: PagosEfectivoComponent
  },
  {
    path: 'EstadoCuenta',
    component: EstadoCuentaComponent
  },
  {
    path: 'buscarResidente/:PKUsuario',
    component: BuscadorResidenteComponent
  },
  {
    path: 'reporte',
    component: ReportesComponent
  },
  {
    path: 'asignar-area-comun/:FKResidencia',
    loadChildren: () => import('./pages/asignar-area-comun/asignar-area-comun.module').then( m => m.AsignarAreaComunPageModule)
  },
  {
    path: 'buzon-de-quejas/:FKResidencia',
    loadChildren: () => import('./pages/buzon-de-quejas/buzon-de-quejas.module').then( m => m.BuzonDeQuejasPageModule)
  },
  {
    path: 'detalles-area-comun/:FKResidencia/:FKNivel/:Fecha',
    loadChildren: () => import('./pages/detalles-area-comun/detalles-area-comun.module').then( m => m.DetallesAreaComunPageModule)
  },
  {
    path: 'detalles-buzon-de-quejas/:NombreCompleto/:Telefono/:Tipo/:DescripcionArea/:DescripcionEstatus',
    loadChildren: () => import('./pages/detalles-buzon-de-quejas/detalles-buzon-de-quejas.module').then( m => m.DetallesBuzonDeQuejasPageModule)
  },
  {
    path: 'mis-quejas/:FKUsuario/:FKResidencia',
    loadChildren: () => import('./pages/mis-quejas/mis-quejas.module').then( m => m.MisQuejasPageModule)
  },
  {
    path: 'ver-area-comun',
    loadChildren: () => import('./pages/ver-area-comun/ver-area-comun.module').then( m => m.VerAreaComunPageModule)
  },
  {
    path: 'ver-area-comun-residente/:FKResidencia/:FKNivel',
    loadChildren: () => import('./pages/ver-area-comun-residente/ver-area-comun-residente.module').then( m => m.VerAreaComunResidentePageModule)
  },
  {
    path: 'buzon-de-quejas-residente/:FKUsuario/:FKResidencia',
    loadChildren: () => import('./pages/buzon-de-quejas-residente/buzon-de-quejas-residente.module').then( m => m.BuzonDeQuejasResidentePageModule)
  },
  {
    path: 'pagoMP',
    component: PagoMPComponent
  },
  {
    path: 'generador-codigos/:FKResidencia',
    loadChildren: () => import('./pages/generador-codigos/generador-codigos.module').then( m => m.GeneradorCodigosPageModule)
  },
  {
    path: 'detallesbuzondequejaadministrador/:PKBuzonDeQueja/:NombreCompleto/:Telefono/:Tipo/:DescripcionArea/:DescripcionEstatus/:Estatus',
    loadChildren: () => import('./pages/detallesbuzondequejaadministrador/detallesbuzondequejaadministrador.module').then( m => m.DetallesbuzondequejaadministradorPageModule)
  },  {
    path: 'tags',
    loadChildren: () => import('./Pages/tags/tags.module').then( m => m.TagsPageModule)
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
