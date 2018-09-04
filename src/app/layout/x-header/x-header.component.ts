import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'x-header',
  template: `
    <nz-header>
      <div class="logo"></div>
    </nz-header>
  `,
  styleUrls: ['./x-header.component.less']
})
export class XHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
