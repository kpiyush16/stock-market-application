import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { User } from '../models/user'
import { AuthenticationService } from './authentication.service';
import { Contact } from '../models/contact'

@Injectable({
  providedIn: 'root'
})
export class EditContactService {

  currentUser: any;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        // if(this.currentUser){
        //   const user = this.authenticationService.currentUserValue;
        // }
   }

  editContact(contact) {
    console.log(contact);
    return this.http.post<Contact>(`${environment.backendUrl}/user-service/contacts/${this.currentUser.contact.id}`, contact);
  }

}
