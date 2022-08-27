import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http:HttpClient) { }



  //news
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=61a3ecf7e9e640718eb52cd0de0bdc72";
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
}
