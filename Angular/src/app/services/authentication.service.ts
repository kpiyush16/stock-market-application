import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    private isAdminSubject:BehaviorSubject<any>;
    public isAdmin:Observable<any>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.isAdminSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('isAdmin')));
        this.isAdmin = this.isAdminSubject.asObservable();
    }

    public get currentUserValue() {
        return this.currentUserSubject.value;
    }

    // public set currentUserValue(user) {
    //     localStorage.setItem('currentUser', JSON.stringify(user));
    //     this.currentUserSubject.next(user);
    // }

    public get isAdminValue() {
        return this.isAdminSubject.value;
    }



    login(username, password) {
        return this.http.post<any>(`${environment.backendUrl}/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                console.log(user);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                if(user.userType == "Admin"){
                    localStorage.setItem('isAdmin', JSON.stringify(true));
                    this.isAdminSubject.next(true);
                }
                else if(user.userType == "User"){
                    localStorage.setItem('isAdmin', JSON.stringify(false));
                    this.isAdminSubject.next(false);
                }
                
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isAdmin');
        this.currentUserSubject.next(null);
        this.isAdminSubject.next(null);
    }
}
