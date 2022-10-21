import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-ticket-overview',
  templateUrl: './ticket-overview.component.html',
  styleUrls: ['./ticket-overview.component.css']
})
export class TicketOverviewComponent implements OnInit {

  constructor(private f:FilmService, private router:ActivatedRoute) { }
  film:any={};
  id=this.f.bookingDetails.filmId;
  total=this.f.bookingDetails.totalSalary
  ngOnInit(): void {
    this.film=this.f.setAllFilms()[this.id];
  }

}
