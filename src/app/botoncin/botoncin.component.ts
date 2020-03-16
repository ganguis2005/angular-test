import { Component } from '@angular/core';

@Component({
  selector: 'app-botoncin',
  templateUrl: './botoncin.component.html',
  styleUrls: ['./botoncin.component.scss']
})
export class BotoncinComponent {

  public buttonColor: string =  "red";


  public printAction($event) {
    this.buttonColor = "black";
    console.log('Click', $event)
  }

}
