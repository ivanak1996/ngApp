import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FairPacksService {

  private _fairPacksUrl = "http://localhost:3000/api/packages";

  constructor(private http: HttpClient) { }

  getFairPackages(){
    return this.http.get<any>(this._fairPacksUrl);
  }
}
