import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { md5 } from 'js-md5';


@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  url = 'https://gateway.marvel.com/v1/public';

  private publicKey = 'da3ba7d7a011ee49e473b50fd0e2cdab';
  private privateKey = '70964ef6c7affdb634aff79fc5140446d15f0133';


  generateHash(ts: string): string {
    return md5(ts + this.privateKey + this.publicKey);
  }

  constructor(private http: HttpClient) { }

  obtenerComics(): Observable<any> {

    const ts = new Date().getTime().toString(); 
    const hash = this.generateHash(ts).toString(); 

    return this.http.get(
      `${this.url}/comics?ts=${ts}&apikey=${this.publicKey}&hash=${hash}`,
    );

  }

  obtenerPersonajes(comicId: any): Observable<any> {

    console.log(comicId)
    const ts = new Date().getTime().toString(); 
    const hash = this.generateHash(ts).toString(); 

    return this.http.get(
      `${this.url}/comics/${comicId}/characters?ts=${ts}&apikey=${this.publicKey}&hash=${hash}`,
    );

  }


}
