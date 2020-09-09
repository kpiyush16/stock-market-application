import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-super-company',
  templateUrl: './super-company.component.html',
  styleUrls: ['./super-company.component.scss']
})
export class SuperCompanyComponent implements OnInit {

  isAdmin: boolean;

  constructor(private authenticationService: AuthenticationService) {
    this.isAdmin = this.authenticationService.isAdminValue;
 }

  ngOnInit(): void {
  }

}
