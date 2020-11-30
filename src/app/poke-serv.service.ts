import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeServService {

  constructor(private http:HttpClient) { }
  getPokemon(s:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${s}`);
  }
}
