import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {

  constructor() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000)
   }
  currentDate:Date = new Date();




}
