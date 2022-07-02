import { Component, OnInit } from '@angular/core';
import machinesData from '../../assets/json/machines.json';


@Component({
  selector: 'app-statusbar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.scss']
})
export class StatusbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  machines: Machine[] = machinesData

}
