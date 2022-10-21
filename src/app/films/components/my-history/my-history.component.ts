import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-my-history',
  templateUrl: './my-history.component.html',
  styleUrls: ['./my-history.component.css']
})
export class MyHistoryComponent implements OnInit {

  constructor(private s:FilmService) { }
  history:any;
  ngOnInit(): void {
   this.history=this.s.bookingDetails;
   console.log(this.history)
  }

}
