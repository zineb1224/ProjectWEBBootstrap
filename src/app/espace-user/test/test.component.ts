import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  imageUrl!: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/projects').subscribe(data => {
      // Récupérez l'URL de l'image du premier projet (ajustez cela selon vos besoins)
      this.imageUrl = data[0].image;
      console.log(data[0].image)
    });
  }
}
