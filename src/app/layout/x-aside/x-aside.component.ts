import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'x-aside',
  template: `
    <nz-layout>
      <nz-sider [nzWidth]='200' nzCollapsible [(nzCollapsed)]="isCollapsed" [nzTrigger]="triggerTemplate">
        <div class="s-logo"></div>
        <div>
          <ul nz-menu [nzMode]="'inline'" [nzInlineCollapsed]="isCollapsed" [nzTheme]="'dark'">
            <x-menu [menus]="menus"></x-menu>
          </ul>
        </div>
      </nz-sider>
    </nz-layout>
  `,
  styleUrls: ['./x-aside.component.less']
})
export class XAsideComponent implements OnInit {

  @Input() menus
  constructor() { }

  ngOnInit() {
  }

}
