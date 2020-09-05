import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // username:string;
  
  constructor(private authenticationService: AuthenticationService) {
    // this.username = authenticationService.currentUserValue.username;
    // console.log(user);
   }

  ngOnInit(): void {
  }

}
