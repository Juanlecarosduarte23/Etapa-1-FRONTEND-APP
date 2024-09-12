import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage  {
  constructor(private menucontroller:MenuController) {}

  mostrarMenu(){
    this.menucontroller.open('first');
  }

}
