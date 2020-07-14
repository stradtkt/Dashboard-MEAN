import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './../_models/User';

@Injectable()
export class AuthService {

    baseUrl = environment.apiUrl;
constructor(
    private http: HttpClient
) { }

    register(user: User) {
        return this.http.post(this.baseUrl + 'register', user);
    }

    login(user: User) {
        return this.http.post(this.baseUrl + 'login', user);
    }

}
