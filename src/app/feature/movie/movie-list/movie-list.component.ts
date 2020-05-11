import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  // movies will hold list of movies from backend
  movies: Movie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
