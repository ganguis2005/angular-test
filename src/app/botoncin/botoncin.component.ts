import { Component } from '@angular/core';

@Component({
  selector: 'app-botoncin',
  templateUrl: './botoncin.component.html',
  styleUrls: ['./botoncin.component.scss']
})
export class BotoncinComponent {

  public buttonColor: string =  "black";
  public buttonOn: boolean = false;

  public printAction($event) {
    if(!this.buttonOn) {
      this.buttonOn = true;
      this.buttonColor = "yellow";
      console.log('On', $event);
    } else {
      this.buttonOn = false;
      this.buttonColor = "black";
      console.log('Off', $event);
    }
  }

}
