import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  ApiUrl = 'https://fakestoreapi.com/products';
  constructor(private _http: HttpClient) { }
  getAllProducts(): Observable<ICart[]> {
    return this._http.get<ICart[]>(this.ApiUrl)
  }

}
