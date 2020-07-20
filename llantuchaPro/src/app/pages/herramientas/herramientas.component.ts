import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent implements OnInit {
  productos:Producto[]=[];
    
  constructor() {
   this.cargarDatosPrueba();   
  }

  ngOnInit(): void {
  }

  cargarDatosPrueba(){
    this.productos.push(new Producto("martillo","obra fina",""));
    
    this.productos.push(new Producto("alicate","obra fina",""));
    this.productos.push(new Producto("frotacho","obra fina",""));
    this.productos.push(new Producto("clavos 1/2","obra fina",""));
    
    this.productos.push(new Producto("brocha","obra fina",""));
    
    this.productos.push(new Producto("tenasa","obra fina",""));
  }
  eventoClick(producto:string){
    alert("se hizo click en el producto "+producto);
  }
}
