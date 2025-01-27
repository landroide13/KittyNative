import { Component, NO_ERRORS_SCHEMA, inject } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular'
import { Page } from '@nativescript/core'


@Component({
  selector: 'ns-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css', 
    './tab.component.ios.css',
    // './current-challenge.component.ios.css'
  ],
  imports: [NativeScriptCommonModule, NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TabComponent {}