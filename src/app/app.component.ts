import { Component } from '@angular/core';


interface Menu{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menu:Menu[]=[
    {
      icon:'home-outline',
      name: 'Iniciar Sesión',
      redirecTo: '/tabs/login'
    },
    {
      icon:'qr-code-outline',
      name: 'Generar QR',
      redirecTo: '/tabs/qr'
    }, 
    {
      icon:'person-circle-outline',
      name: 'Mi Perfil',
      redirecTo: '/tabs/perfil'
    },   
    {
      icon:'settings-outline',
      name: 'Configuración',
      redirecTo: '/tabs/tab3'
    },
    
   

    {
      icon:'document-text-outline',
      name: 'Justificar Asistencia',
      redirecTo: '/tabs/justificacion'
    },


    {
      icon:'exit-outline',
      name: 'Salir',
      redirecTo: '/tabs/login'
    },
  ]

  constructor() {}
}
