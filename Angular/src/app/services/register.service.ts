import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user'
import { Contact } from '../models/contact'


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }

  register(userDetails) {
    console.log(userDetails);
    let contact = new Contact();
    contact.email = userDetails.email;
    
    let user = new User();
    user.contact = contact;
    user.username = userDetails.username;
    user.password = userDetails.password;
    return this.http.post<User>(`${environment.backendUrl}/user-service/users/register`, user);
  }

  
}
