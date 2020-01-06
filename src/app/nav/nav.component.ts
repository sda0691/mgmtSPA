import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      console.log('success');
      // this.alertify.success('Logged in successfully');
    }, error => {
      console.log('error');
      // this.alertify.error(error);
    }, () => {
      // this.router.navigate(['/members']);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    /* this.authService.decodedToken = null;
    this.authService.currentUser = null; */
    /* 
    this.alertify.message('logged out');
    this.router.navigate(['/home']); */
  }
}
