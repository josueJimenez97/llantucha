import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhpServiceService {

  URL = "http://localhost/backEndTienda/";
  constructor(private http: HttpClient) { }

  public subirImagen(dato:any):Observable<any> {
    return this.http.post(`${this.URL}prueba.php`,dato);
  }
}
