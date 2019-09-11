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

  getCartelera () {

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate( hasta.getDate() + 7 );

    let desdeStr = `${ desde.getFullYear() }-${ desde.getMonth()+1 }-${ desde.getDate() }`;
    let hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth()+1 }-${ hasta.getDate() }`;

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe( map( data => data['results'] ) );
  }
 
  getPopulares() {
    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe( map( data => data['results'] ) );
  }
}
