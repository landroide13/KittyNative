import { Routes } from '@angular/router';
import { CartComponent } from './feature/cart/cart.component';
import { AuthComponent } from './feature/auth/auth.component';

export const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'cart', component: CartComponent },
  
];
