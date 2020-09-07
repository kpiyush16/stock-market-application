import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stockmarket';
  currentUser: any;
  username:string;
  // isAdmin:boolean = false;
  // fillerContent = Array.from({length: 50}, () =>
  //     `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  //      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  //      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  //      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  //      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
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
