import { Component } from '@angular/core';

@Component({
  selector: 'site-layout',
  template: `
    <site-header></site-header>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class SiteLayoutComponent {}