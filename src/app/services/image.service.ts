import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private httpOptions :any = { }

  constructor(private http: HttpClient) { }

  getImages(page : any){
    this.httpOptions['params'] = new HttpParams()
      .set("method","flickr.photos.search")
      .set("api_key",environment.apiKey)
      .set("tags","eat")
      .set('page',page)
      .set('per_page',"9")
      .set("format","json")
      .set("nojsoncallback","1")
    return this.http.get(environment.baseURL,this.httpOptions);
  }
}
