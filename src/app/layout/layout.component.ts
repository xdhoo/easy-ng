import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {

  menuData = [
    {
      title: 'DASHBOARD',
      url: '',
      icon: 'anticon-user',
      children: [
        {
          title: 'A',
          url: '/home/dashboard',
          icon: 'anticon-schedule',
          subPage: []
        }, {
          title: 'B',
          url: '/home/oa/businessTrip',
          icon: 'anticon-environment-o'
        }
      ]
    }, {
      title: 'O',
      url: '',
      icon: 'anticon-switcher',
      children: [
        {
          title: 'P',
          url: '/home/pm/models',
          icon: 'anticon-file'
        }, {
          title: 'Q',
          url: '/home/pm/process',
          icon: 'anticon-code-o'
        },
      ]
    }, {
      title: 'R',
      url: '',
      icon: 'anticon-user',
      children: [
        {
          title: 'S',
          url: '/home/system/user',
          icon: 'anticon-setting',

        }
      ]
    }, {
      title: 'Demo',
      icon: 'anticon-setting',
      url: '/home/demo'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
