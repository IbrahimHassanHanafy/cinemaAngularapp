import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private f:FilmService) { }
  films=new Array();
  ngOnInit(): void {
    this.films=this.f.setAllFilms();
    for(let i=0;i< this.f.setAllFilms().length;i++ ){
      localStorage.setItem('film'+(i+1),JSON.stringify(this.f.setAllFilms()[i]))
    }
    
  }


}
