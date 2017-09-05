import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterStateSnapshot } from '@angular/router';
import { MdSidenav } from '@angular/material';

@Component({
    selector: 'side-nav-item',
    template: `<li>
                  <a class="side-nav-menu-item" md-ripple
                    [ngClass]="{'side-nav-menu-item-active': active,'side-nav-menu-item-disabled': disabled}"
                    (click)="navigate()">
                        <md-icon *ngIf="icon" style="margin-right:10px;vertical-align:middle">{{icon}}</md-icon>
                        <span style="vertical-align:middle">{{title}}</span>
                  </a>
               </li>`,
    styles: [
      `.side-nav-menu-item {
          list-style-type: none;
          box-sizing: border-box;
          display: block;
          font-size: 14px;
          font-weight: 400;
          line-height: 47px;
          text-decoration: none;
          transition: all .3s;
          padding: 0 16px;
          position: relative;
          cursor: pointer;
        }
        .side-nav-menu-item-active {
          background: #ddd
        }
        .side-nav-menu-item-disabled {
          color: #aaa
        }
        .side-nav-menu-item:hover {
          background: #f0f0f0;
        }`]
  })
  export class SideNavItemComponent {

    @Input('title') title: string;
    @Input('icon')  icon: string;
    @Input('route') route: string;
    @Input('disabled') disabled: boolean;
    active: boolean;

    constructor(private router: Router) {
    }

    navigate() {
      if (!this.disabled) {
        this.router.navigate([this.route]);
      }
    }

    activatePath(path: string) {
      if (path === this.route) {
        this.active = true;
      } else {
        this.active = false;
      }
    }
  }
