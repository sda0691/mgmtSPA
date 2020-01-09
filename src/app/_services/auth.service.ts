import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl = 'http://localhost:5000/api/auth/';


constructor(private http: HttpClient) { }

login(model: any) {
  return this.http.post(this.baseUrl + 'login' , model).pipe(
    map((response: any) => {
      const token = response;
      if (token) {
        localStorage.setItem('token', response.token);
      }
    })
  );
}

register(model: any) {
  return this.http.post(this.baseUrl + 'register', model);
}
loggedIn() {
  const token = localStorage.getItem('token');
  return token;
}
}
