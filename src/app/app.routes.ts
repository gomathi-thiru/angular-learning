import { Routes } from '@angular/router';
import { HomeComponent } from './router/home';
import { AboutComponent } from './router/about';
import { UserComponent } from './router/user';
import { NotFoundComponent } from './router/not-found';
import { BackComponent } from './router/back';
import { authGuard } from './router/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Opens the home page
  { path: 'about', component: AboutComponent },
  { path: 'user/:id', component: UserComponent },
  { path: '**', component: NotFoundComponent },
  { path: 'back', component: BackComponent},

//   Protect a route using a guard
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [authGuard] // Controls route access
  },
  { path: '**', redirectTo: '' } // it handles the unknown urls
];
