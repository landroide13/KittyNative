import { Component, Input, NO_ERRORS_SCHEMA, inject } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptRouterModule, RouterExtensions } from '@nativescript/angular'
import { Page } from '@nativescript/core'
import { isAndroid } from '@nativescript/core/platform';

declare var android: any;

@Component({
  selector: 'ns-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css', 
    // './action-bar.component.ios.css',
    // './current-challenge.component.ios.css'
  ],
  imports: [NativeScriptCommonModule, NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ActionBarComponent {
  @Input() title: string;
  @Input() showBackBtn = true;
  @Input() hasMenu = true;

  constructor(private page: Page, private router: RouterExtensions){}

  get android(){
      return isAndroid;
  }

  get canGoBack() {
      return this.router.canGoBack() && this.showBackBtn;
  }

  onGoBack() {
    this.router.backToPreviousPage();
  }


  onLoadedActionBar() {
    if (isAndroid) {
    const androidToolbar = this.page.actionBar.nativeView;
    const backButton = androidToolbar.getNavigationIcon();
    if (backButton) {
        backButton.setColorFilter(
        android.graphics.Color.parseColor('#171717'),
        (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
        );
    }
    }
  }



}