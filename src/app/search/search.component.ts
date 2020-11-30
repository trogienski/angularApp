import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokeServService } from '../poke-serv.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchInput:string;
  constructor(public http:PokeServService) { }
  public dispPokemon;
  public abilities;
  public subscriber;
  public moves;
  public sprites;
  public buttonPressed;
search(){
  this.dispPokemon=null;
  this.sprites=null;
  this.moves=null;
  this.abilities=null;
  this.http.getPokemon(this.searchInput).subscribe(response=>
    {
      console.log(response);
      this.dispPokemon=response;
});
}
dispAbilities(){
  this.buttonPressed=0;
  this.abilities=this.dispPokemon.abilities;
  console.log(this.abilities);
}
dispSprites(){
  this.buttonPressed=2;
  this.sprites=Object.entries(this.dispPokemon.sprites);
  console.log(this.sprites);
}
dispMoves(){
this.buttonPressed=1;
this.moves=this.dispPokemon.moves;
console.log(this.moves);
}
  ngOnInit(): void {
  }
}
