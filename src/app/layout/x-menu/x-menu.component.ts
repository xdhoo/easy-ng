import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'x-menu',
  template: `
    <ng-container *ngFor="let item of menus">
      <li nz-submenu *ngIf="item.children">
        <span title><i class="anticon {{item.icon}}"></i>{{item.title}}</span>
        <ul *ngIf="item.children">
          <x-menu [menus]="item.children"></x-menu>
        </ul>
      </li>
      <li nz-menu-item *ngIf="!item.children" routerLink="{{item.url}}" (click)="menuClicked.emit(item.operate)">
        <span title><i class="anticon {{item.icon}}"></i><span class="nav-text">{{item.title}}</span></span>
      </li>
    </ng-container>
  `
})
export class XMenuComponent implements OnInit {

  @Input() menus;

  constructor() { }

  ngOnInit() {
  }

}
