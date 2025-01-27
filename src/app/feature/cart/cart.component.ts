import { Component, NO_ERRORS_SCHEMA, ViewContainerRef, inject } from '@angular/core'
import { ModalDialogService, NativeScriptCommonModule, NativeScriptRouterModule, RouterExtensions } from '@nativescript/angular'
import { Page } from '@nativescript/core'
import { ActionBarComponent } from '../../shared/action-bar/action-bar.component';


@Component({
    selector: 'ns-current-challenge',
    templateUrl: './current-challenge.component.html',
    styleUrls: ['./current-challenge-common.css', 
                './current-challenge.component.css',
                // './current-challenge.component.ios.css'
              ],
    imports: [NativeScriptCommonModule, ActionBarComponent, NativeScriptRouterModule],
    schemas: [NO_ERRORS_SCHEMA],
  })
  export class CurrentChallengeComponent {

    constructor(){}

  }