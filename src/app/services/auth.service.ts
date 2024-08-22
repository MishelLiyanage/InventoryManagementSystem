import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userId: number | null = null;
  private firstname: string | null = null;

  private apiLoginUrl = 'http://localhost/ims-backend/login.php'; 

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: any) {}

  login(username: string, password: string): Observable<any> {
    console.log(username + " " + password);
    return this.http.post<any>(this.apiLoginUrl, { username, password });
  }

  setUserId(id: number | null) {
    if (id !== null && id !== undefined) {
      this.userId = id;
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('userId', id.toString());
      }
    } else {
      console.error('Invalid user ID:', id);
    }
  }

  getUserId(): number | null {
    if (isPlatformBrowser(this.platformId)) {
      const storedId = localStorage.getItem('userId');
      return storedId !== null ? Number(storedId) : this.userId;
    }
    return this.userId;
  }

  setfirstname(firstname: string) {
    this.firstname = firstname;
    if (isPlatformBrowser(this.platformId)) {
    localStorage.setItem('firstname', firstname);
    }
  }

  getfirstname(): string | null {
    if (isPlatformBrowser(this.platformId)) {
    return this.firstname || localStorage.getItem('firstname');
    }
    return this.firstname;
  }
  

  clearUserdetails() {
    this.userId = null;
    this.firstname = null;
    if (isPlatformBrowser(this.platformId)) {
    localStorage.removeItem('userId');
    localStorage.removeItem('firstname');  
    }
  }
}
