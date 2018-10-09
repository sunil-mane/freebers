import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
/**
 * Gif Search Service
 */
@Injectable({
  providedIn: 'root'
})
export class GifSearchService {

  host = 'http://api.giphy.com';
  apiKey = 'ydirHJzF3l4Jr8NfcQg1kTsU0vl5JUY2';

  constructor(private http: Http) { }

  search(query: string) {
    const path = `/v1/gifs/search?api_key=${this.apiKey}`;
    return this.http.get(this.host + path + `&q=${query}`);
  }

}
