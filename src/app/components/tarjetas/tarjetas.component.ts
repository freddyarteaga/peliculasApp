import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items: any [];

   ss: any;


  constructor(private router: Router) { 
    this.ss = "http://image.tmdb.org/t/p/w300/"
  }

  // VerArtista( item:any ) {
  //   // console.log( item )
  //   let artistaId;

  //   if ( item.type === 'artist' ) {
  //     artistaId = item.id;
  //   } else {
  //     artistaId = item.artists[0].id;
  //   }

  //   this.router.navigate(['/artist', artistaId]);

  // }

}