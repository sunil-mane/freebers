import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GifSearchService {

  host = 'http://api.giphy.com';

  constructor(private http: Http) { }

  search() {
    const path = '/v1/gifs/search';
    return this.http.get(this.host + path);
  }

}
