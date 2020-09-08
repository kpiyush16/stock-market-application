import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stockmarket';
  currentUser: any;
  username:string;
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        if(this.currentUser){
          this.username = this.currentUser.username;
          // if(user.userType == "admin"){
          //   this.isAdmin = true;
          // }
          // else if(user.userType == "user"){
          //   this.isAdmin = true;
          // }
        }
    }

    ngOnChages(){
      this.update(this.currentUser);
    }

    update(user){
      if(user){
        this.username=user.username;
          // if(user.userType == "admin"){
          //   this.isAdmin = true;
          // }
          // else if(user.userType == "user"){
          //   this.isAdmin = true;
          // }
      }
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
