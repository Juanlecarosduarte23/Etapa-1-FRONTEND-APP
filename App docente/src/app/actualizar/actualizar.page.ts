import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage {

  
  constructor(private menucontroller:MenuController) {}

  mostrarMenu(){
    this.menucontroller.open('first');
  }

}