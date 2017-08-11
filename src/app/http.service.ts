import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  getMewtwo(){
  	console.log('getMewtwo');
  	return this._http.get('http://pokeapi.co/api/v2/pokemon/150').map(Response=>Response.json()).toPromise();
  }
}
