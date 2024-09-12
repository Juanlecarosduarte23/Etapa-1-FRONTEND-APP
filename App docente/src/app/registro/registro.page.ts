import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

   
  constructor(private menucontroller:MenuController) {}

  mostrarMenu(){
    this.menucontroller.open('first');
  }

}