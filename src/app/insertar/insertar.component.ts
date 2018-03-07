import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {
  
  blog = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveBlog() {
    this.http.post('/blog', this.blog)
      .subscribe(res => {
         
          this.router.navigate(['/blogs']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
