import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { PrivatePageComponent } from './components/private-page/private-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SocioPageComponent } from './components/socio-page/socio-page.component';
import { SocioComponent } from './components/socio-page/socio/socio.component';
import { SocioListComponent } from './components/socio-page/socio-list/socio-list.component';
import { CuotaPageComponent } from './components/cuota/cuota-page/cuota-page.component';

import { AuthGuard } from './guards/auth.guard';



const ROUTES: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'private', component: PrivatePageComponent, canActivate: [AuthGuard]},
  {path: 'socio', component: SocioPageComponent},
  {path: 'cuota', component: CuotaPageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModuleModule { }
