import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiLoginUrl = 'http://localhost/ims-backend/login.php'; 

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    console.log(username + " " + password);
    return this.http.post<any>(this.apiLoginUrl, { username, password });
  }
}
