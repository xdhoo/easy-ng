import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'x-buttons',
  templateUrl: './x-buttons.component.html',
  styleUrls: ['./x-buttons.component.less']
})
export class XButtonsComponent implements OnInit {

  @Input() buttons;
  @Input() data;
  constructor() { }

  ngOnInit() {
    this.buttons.map(item=>{
      item.visible = item.visible ? item.visible(this.data) : true;
      item.type = item.type ? item.type : 'common';
    })
  }

}
