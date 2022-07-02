import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {

  constructor() {   }
  @Input() name:string='';
  @Input() status:number=0;
  @Input() icon:string='';

  ngOnInit(): void {
  }

}
