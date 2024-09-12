import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../portada/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../menu/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../ajustes/tab3.module').then(m => m.Tab3PageModule)
      },

      {
        path: 'qr',
        loadChildren: () => import('../qr/qr.module').then(m => m.QrPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'registro',
        loadChildren: () => import('../registro/registro.module').then( m => m.RegistroPageModule)
      },
      {
        path: 'justificacion',
        loadChildren: () => import('../justificacion/justificacion.module').then( m => m.JustificacionPageModule)
      },
      {
        path: 'recuperar',
        loadChildren: () => import('../recuperar/recuperar.module').then( m => m.RecuperarPageModule)
      },
      {
        path: 'actualizar',
        loadChildren: () => import('../actualizar/actualizar.module').then( m => m.ActualizarPageModule)
      },
      {
        path: 'codigo',
        loadChildren: () => import('../codigo/codigo.module').then( m => m.CodigoPageModule)
      },
      {
        path: 'docente',
        loadChildren: () => import('../docente/docente.module').then( m => m.DocentePageModule)
      },
      {
        path: 'lista',
        loadChildren: () => import('../lista/lista.module').then( m => m.ListaPageModule)
      },
      {
        path: 'vista',
        loadChildren: () => import('../vista/vista.module').then( m => m.VistaPageModule)
      },
      
     
      
    
      {
        path: '',
        redirectTo: '/tabs/tab2',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
