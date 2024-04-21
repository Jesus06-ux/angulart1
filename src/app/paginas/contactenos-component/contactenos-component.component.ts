import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-contactenos-component',
  templateUrl: './contactenos-component.component.html',
  styleUrl: './contactenos-component.component.css'
})
export class ContactenosComponentComponent {

  constructor(private router: Router) {}

  ngOnInit() {

  }

  volver() {
this.router.navigate(['/inicio']);
  }

}
