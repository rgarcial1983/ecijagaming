import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.loginUser(this.email, this.password)
    .then( (res) => {
      this.flashMensaje.show('Usuario logueado correctamente',
      {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/private']);
    }).catch( (err) => {
      this.flashMensaje.show(err.message,
      {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['/login']);
    });
  }

  onClickLoginGoogle() {
    console.log('Entrar con google');
    this.authService.loginGoogle()
    .then( (res) => {
      this.router.navigate(['/private']);
    }).catch ( err => {
      this.flashMensaje.show(err,
      {cssClass: 'alert-danger', timeout: 4000});
     });
  }

  onClickLoginFacebook() {
    console.log('Entrar con facebook');
    this.authService.loginFacebook()
    .then( (res) => {
      console.log(res);
      this.router.navigate(['/private']);
    }).catch ( err => console.log(err.message));
  }

  onClickLoginTwetter() {
    console.log('Entrar con twitter');
    this.authService.loginTwitter()
    .then( (res) => {
      console.log(res);
      this.router.navigate(['/private']);
    }).catch ( err => console.log(err.message));
  }

}
