import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/ims-backend/login.php'; 

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    console.log(username + " " + password);
    return this.http.post<any>(this.apiUrl, { username, password });
  }
}
