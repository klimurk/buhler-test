import { Component, OnInit } from '@angular/core';
import machinesData from '../../assets/json/machines.json';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})

export class BodyComponent {

  constructor() { }

  machines: Machine[] = machinesData

}
