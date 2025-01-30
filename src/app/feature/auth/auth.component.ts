import { Component, NO_ERRORS_SCHEMA, inject } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptRouterModule, RouterExtensions } from '@nativescript/angular'
import { Page } from '@nativescript/core'
import { ActionBarComponent } from '../../shared/action-bar/action-bar.component';

@Component({
    selector: 'ns-auth',
    templateUrl: './auth.component.html',
    imports: [NativeScriptCommonModule, ActionBarComponent, NativeScriptRouterModule],
    schemas: [NO_ERRORS_SCHEMA],
  })
  export class AuthComponent {

    constructor(private router: RouterExtensions, private page: Page){}
    
    ngOnInit() {}

    login(){
      this.router.navigate(['/cart'], { clearHistory: true })
    }

  }