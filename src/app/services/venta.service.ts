import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private myAppUrl = 'http://localhost:5256/';
  private myApiUrl = 'api/Venta/'

  constructor(private http: HttpClient) { }

  getListProductos(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  saveProducto(producto: any): Observable<any> {
    console.log('jpr', producto);
    return this.http.post(this.myAppUrl + this.myApiUrl, producto)
  }
}
