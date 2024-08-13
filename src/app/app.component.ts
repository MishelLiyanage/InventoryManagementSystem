import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReportsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ims';
}
