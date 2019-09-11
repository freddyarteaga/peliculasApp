import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

 
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
 
  private apikey = '410ea366735e5b1458ebf6187ec33801';
  private urlMoviedb = 'https://api.themoviedb.org/3';
 
  constructor(
    private http: HttpClient
  ) { }
 
  getPopulares() {
    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe( map( data => data['results'] ) );
  }
}
