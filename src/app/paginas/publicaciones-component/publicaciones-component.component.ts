import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-publicaciones-component',
  templateUrl: './publicaciones-component.component.html',
  styleUrl: './publicaciones-component.component.css'
})
export class PublicacionesComponentComponent implements OnInit {

  data: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.setData();
  }

  setData() {
    this.apiService.getData().subscribe( data => {
      this.data = data;
      console.log(this.data);
    })
  }
}





