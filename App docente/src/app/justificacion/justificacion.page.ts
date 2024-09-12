import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-justificacion',
  templateUrl: './justificacion.page.html',
  styleUrls: ['./justificacion.page.scss'],
})
export class JustificacionPage  {

  correo:string="";
  pass:string="";

  constructor(private alertcontroller:AlertController,
              private router: Router,
              private menucontroller:MenuController) { }
              mostrarMenu(){
                this.menucontroller.open('first');
              }
            

  ngOnInit() {
  }

 async login(){
    /*codificar una alerta*/
    const alert = await this.alertcontroller.create({
      header: 'Hola!',
      mode:'ios',
      message:'Justificación enviada con exito '+this.correo,
      buttons: [
        {
          text: 'Ingresar',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/tabs/tab2']);
          },
        },
      ],
    });

    await alert.present();
  }

  

}