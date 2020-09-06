import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        console.log("In HttpInterceptor");
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            console.log("token="+currentUser.token);
            
            request = request.clone({
                headers: request.headers.set("Authorization",
                    "Bearer " + currentUser.token)
                // setHeaders: { 
                //     // Authorization: "Bearer" + currentUser.token
                //     // Authorization: `Bearer ${currentUser.token}`
                //     // Authorization: 'Bearer'+ currentUser.token
                //     Authotrization : `Bearer `
                // }
            });
            console.log("request header token = " + request.headers.get("Authorization"));
            console.log("token="+currentUser.token);
        }
        return next.handle(request);
    }
}