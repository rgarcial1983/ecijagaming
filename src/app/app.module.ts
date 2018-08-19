import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Rutas
import { AppRoutingModuleModule } from './app-routing-module.module';

// Components
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PrivatePageComponent } from './components/private-page/private-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SocioPageComponent } from './components/socio-page/socio-page.component';
import { SocioComponent } from './components/socio-page/socio/socio.component';
import { SocioListComponent } from './components/socio-page/socio-list/socio-list.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FlashMessagesModule } from 'angular2-flash-messages';

// Servicios
import { AuthService } from './services/auth.service';
import { SocioService } from './services/socio.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivatePageComponent,
    NotFoundPageComponent,
    SocioPageComponent,
    SocioComponent,
    SocioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModuleModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService,
    SocioService,
    AuthGuard,
    FlashMessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
