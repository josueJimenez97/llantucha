import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class PhpServiceService {
  URL = "http://localhost/backendLlantucha/";

  constructor(private http: HttpClient) { }

  public getProductos(){
    return this.http.get(`${this.URL}obtenerProductos2.php`);// si retorna imagenes
  }

  public getProductosInventario(){
    return this.http.get(`${this.URL}obtenerProductos.php`);// no retorna imagenes
  }
  public subirImagen(dato:any):Observable<any> {
    return this.http.post(`${this.URL}prueba.php`,dato);
  }

  public iniciarSesion(usuario:Usuario){
    return this.http.post(`${this.URL}iniciarSesion.php`,JSON.stringify(usuario));
  }

  public agregarProducto(prod:Producto){
    return this.http.post(`${this.URL}agregarProducto.php`,JSON.stringify(prod));//retorna el id del producto agregado o un numero <0 si salio mal
  }

  public getTipoProductos(idTipo: number){
    return this.http.get(`${this.URL}obtenerProductosTipo.php?idTipo=${idTipo}`);
  }
  public agregarItem(item:any){
    return this.http.post(`${this.URL}agregarItem.php`,JSON.stringify(item));
  }

}
