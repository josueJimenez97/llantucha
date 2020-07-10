import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class PhpServiceService {
  URL = "http://localhost/backEndTienda/";
  usuario: Usuario;
  constructor(private http: HttpClient) { }

  public subirImagen(dato:any):Observable<any> {
    return this.http.post(`${this.URL}prueba.php`,dato);
  }
  public setUsuario(usuario){
    this.usuario=usuario;
  }
}
