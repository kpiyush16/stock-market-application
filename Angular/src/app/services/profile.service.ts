import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user:User;

  constructor() {
      
  }
}
