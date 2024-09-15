import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'admin', component: LayoutComponent, children: [
      { path: '', loadChildren: () => import('./admin/components/home/home.module').then(module => module.HomeModule), canActivate: [authGuard] }
    ], canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
