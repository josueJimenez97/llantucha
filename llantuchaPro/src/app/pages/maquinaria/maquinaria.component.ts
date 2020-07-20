import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-maquinaria',
  templateUrl: './maquinaria.component.html',
  styleUrls: ['./maquinaria.component.css']
})
export class MaquinariaComponent implements OnInit {
  productos: Producto[]=[];
  constructor() { 
    this.cargarDatosPrueba();
  }

  ngOnInit(): void {
    if(typeof(Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
      console.log("tengo web storage");
     } else {
      // Sorry! No Web Storage support..
      console.log("neeeeel")
     }
  }
  cargarDatosPrueba(){
    this.productos.push(new Producto("mezcladora","obra fina",""));
    
    this.productos.push(new Producto("vibradora","obra fina",""));
    this.productos.push(new Producto("ginche","obra fina",""));
  }
  eventoClick(producto:string){
    alert("se hizo click en el producto "+producto);
  }
}
