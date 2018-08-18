import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogin: boolean;
  public nombreUser: string;
  public email: string;
  public photo: string;
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.nombreUser = auth.displayName;
        this.email = auth.email;
        this.photo = auth.photoURL;
      } else {
        this.isLogin = false;
      }
    });
  }

  onClickLogout () {
    this.authService.logout();
  }
}
