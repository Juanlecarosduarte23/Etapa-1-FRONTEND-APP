import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage  {

  constructor(private menucontroller:MenuController) {}

  mostrarMenu(){
    this.menucontroller.open('first');
  }

}
