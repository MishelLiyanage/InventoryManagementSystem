import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})
export class UpdateFormComponent {

  product: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost/imsBA/get-product.php?id=${id}`).subscribe(data => {
      this.product = data;
    });
  }

  onSubmit(form: NgForm) {
    this.http.post('http://localhost/imsBA/update-product.php', this.product).subscribe(() => {
      this.router.navigate(['/feature/update-inventory']);
    });
  }

  onCancel() {
    this.router.navigate(['/feature/update-inventory']);
  }
}
