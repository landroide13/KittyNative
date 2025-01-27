import { Component, NO_ERRORS_SCHEMA, ViewContainerRef, inject } from '@angular/core'
import { ModalDialogService, NativeScriptCommonModule, NativeScriptRouterModule, RouterExtensions } from '@nativescript/angular'
import { Page } from '@nativescript/core'
import { ActionBarComponent } from '../../shared/action-bar/action-bar.component';


@Component({
    selector: 'ns-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css', 
                './cart.component.ios.css',
                // './current-challenge.component.ios.css'
              ],
    imports: [NativeScriptCommonModule, ActionBarComponent, NativeScriptRouterModule],
    schemas: [NO_ERRORS_SCHEMA],
  })
  export class CartComponent {

    constructor(){}

  }