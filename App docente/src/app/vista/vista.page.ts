import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-vista',
  templateUrl: './vista.page.html',
  styleUrls: ['./vista.page.scss'],
})
export class VistaPage  {

  constructor(private menucontroller:MenuController) {}

  mostrarMenu(){
    this.menucontroller.open('first');
  }

}
