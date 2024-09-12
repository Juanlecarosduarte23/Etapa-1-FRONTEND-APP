import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage  implements OnInit{

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
      message:'Bienvenido a Duoc Asistencia '+this.correo,
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