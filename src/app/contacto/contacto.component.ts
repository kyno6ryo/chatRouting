import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: []
})
export class ContactoComponent implements OnInit {
  
  contacto = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveContacto() {
    this.http.post('/contactos', this.contacto)
      .subscribe(res => {
         
          this.router.navigate(['/home']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
