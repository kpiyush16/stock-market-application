import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user:User;
  success:string;
  
  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute
    ){ 
    this.user = this.authenticationService.currentUserValue;
  }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams['updated']) {
      this.success = 'Contact Update successful';
  }
  }

}
