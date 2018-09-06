import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'x-aside',
  template: `
    <div class="s-logo"></div>
    <div>
      <ul nz-menu [nzMode]="'inline'" [nzInlineCollapsed]="isCollapsed" [nzTheme]="'dark'">
        <x-menu [menus]="menus"></x-menu>
      </ul>
    </div>
  `,
  styleUrls: ['./x-aside.component.less']
})
export class XAsideComponent implements OnInit {

  @Input() menus;
  constructor() { }

  ngOnInit() {
  }

}
