import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nosotros-component',
  templateUrl: './nosotros-component.component.html',
  styleUrl: './nosotros-component.component.css'
})
export class NosotrosComponentComponent {

  constructor(private router: Router) {}

  ngOnInit() {

  }

  volver() {
this.router.navigate(['/inicio']);
  }

}
