import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'admin', children: [
    { path: '', component: LayoutComponent, children: [
        { path: 'home', loadChildren: () => import('./admin/components/home/home.module').then(module => module.HomeModule) }
      ], canActivate: [authGuard]
    },
    { path: 'sign-in', component: SignInComponent },
  ]},
  { path: '**', redirectTo: 'admin/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
