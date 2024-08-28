import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl = 'http://api.viosu.online/report_generator.php'; //  PHP backend URL is this

  constructor(private http: HttpClient) { }

  // Fetch JSON report
  getReport(reportType: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?report=${reportType}`);
  }

  // Download CSV report
  downloadCsvReport(reportType: string): Observable<Blob> {
    console.log('Downloaded');
    return this.http.get(`${this.baseUrl}?report=${reportType}&format=csv`, { responseType: 'blob' });
  }
}
