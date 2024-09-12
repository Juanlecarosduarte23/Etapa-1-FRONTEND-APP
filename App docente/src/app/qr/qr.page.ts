import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage {
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
      message:'Se ha iniciado la captura de QR '+this.correo,
      buttons: [
        {
          text: 'Ingresar',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/tabs/codigo']);
          },
        },
      ],
    });

    await alert.present();
  }

  

}