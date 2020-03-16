import { Component } from '@angular/core';

@Component({
  selector: 'app-botoncin',
  templateUrl: './botoncin.component.html',
  styleUrls: ['./botoncin.component.scss']
})
export class BotoncinComponent {

  public buttonColor: string =  "cadetblue";


  public printAction($event) {
    this.buttonColor = "yellow";
    console.log('Click', $event)
  }

}
