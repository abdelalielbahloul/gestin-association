import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: 'general',
      type: 'header'
    },
    {
      title: 'Dashboard',
      icon: 'fa fa-tachometer',
      active: false,
      link: "/home",
    },
    {
      title: 'Members',
      icon: 'fa fa-users',
      active: false,
      link: '/members',
      // type: 'dropdown',
      // badge: {
      //   text: '3',
      //   class: 'badge-danger'
      // },
      // submenus: [
      //   {
      //     title: 'add new',
      //     link: '/members/add',
      //     icon: 'fa fa-plus'
      //   },
      // ]
    },
    {
      title: 'Roles',
      icon: 'fa fa-check-square-o',
      active: false,
      link: '/roles'
      // type: 'dropdown',
      // submenus: [
      //   {
      //     title: 'General',
      //   },
      //   {
      //     title: 'Panels'
      //   },
      //   {
      //     title: 'Tables'
      //   },
      //   {
      //     title: 'Icons'
      //   },
      //   {
      //     title: 'Forms'
      //   }
      // ]
    },
    // {
    //   title: 'Extra',
    //   type: 'header'
    // },
    // {
    //   title: 'Documentation',
    //   icon: 'fa fa-book',
    //   active: false,
    //   type: 'simple',
    //   badge: {
    //     text: 'Beta',
    //     class: 'badge-primary'
    //   },
    // },
    // {
    //   title: 'Calendar',
    //   icon: 'fa fa-calendar',
    //   active: false,
    //   type: 'simple'
    // },
    // {
    //   title: 'Examples',
    //   icon: 'fa fa-folder',
    //   active: false,
    //   type: 'simple'
    // }
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
