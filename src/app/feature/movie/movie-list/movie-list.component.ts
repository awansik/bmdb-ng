import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title: string = "Movie-List";
  // movies will hold list of movies from backend
  // will be one way bound on html to provide table view of movies
  movies: Movie[] = [];

  constructor(private movieSvc: MovieService) { }

  ngOnInit(): void {
    // call our movie service to populate list of movies (p. 139)
    this.movieSvc.list().subscribe(
      jr => {
        this.movies = jr.data as Movie[];
        console.log("List of Movies", this.movies);
      }
    );
  }

}
