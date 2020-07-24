import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRegisterDto } from '../UserRegisterDto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class AuthServiceService {

    baseURL: string;
    //auth_token: string;

    constructor(private http: HttpClient) {
        this.baseURL = 'http://localhost:5001/';
    }

    signUp(userRegisterDTO: UserRegisterDto): Observable<boolean> {
        return this.http.post(this.baseURL + "Account/SignUp", userRegisterDTO,
            { observe: "response", headers: new HttpHeaders({ 'Content-Type': 'application/json', }) }).
            pipe(map(response => {
                switch (response.status) {   // 200 OK, 200 OK but with error code, 503ServiceUnavailable.. 
                    case 200:
                        return true;
                    default:
                        return false;
                }
            }));
    }

}
